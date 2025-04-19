import * as fs from 'fs';
import * as cheerio from 'cheerio';

interface TableRow {
  [key: string]: any;
}

/**
 * Parses the HTML content of a file and converts it to JSON format.
 * The function extracts the table headers and rows, processes the data,
 * and returns a JSON object containing the data.
 *
 * @param {string} fileContent - The HTML content of the file.
 * @returns {Object} - An object containing the parsed data.
 */
export function parseHtmlToJson(fileContent: string): { data: TableRow[] } {
  const $ = cheerio.load(fileContent);

  const table = $('table');
  const headers: any[] = [];
  const data: TableRow[] = [];
  let firstTime = true;

  // Extract the headers
  $(table).find('tr:not(.theading)').first().find('td').each((index, element) => {
    headers.push(convertToValidPropertyName($(element).html()?.toString() || ''));
  });

  // Extract the data rows
  $(table).find('tbody tr').each((index, row) => {
    const rowData = {} as TableRow;
    $(row).find('td').each((tdIndex, tdElement) => {
      let value = $(tdElement).text().trim();
      if (tdIndex === 0) {
        // Convert the first column to a valid date format
        value = convertDateFormat(value);
      } else if (headers[tdIndex].toLowerCase().includes('lat') || headers[tdIndex].toLowerCase().includes('long')) {
        // Convert latitude and longitude to decimal degrees
        const sign = value.endsWith('S') || value.endsWith('W') ? -1 : 1;
        // remove the last character (N/S/E/W) and convert to number
        const degrees = parseFloat(value.slice(0, -1));
        // multiply by sign to get the correct value
        value = (degrees * sign).toString();
      } else if (headers[tdIndex] === 'centralDur') {
        // Convert duration to seconds
        const parts = value.slice(0,-1).split('m');
        if (parts.length === 2) {
          const minutes = parseInt(parts[0], 10);
          const seconds = parseFloat(parts[1]);
          value = (minutes * 60 + seconds).toString();
        }
      }
      const numberValue = Number(value);
      rowData[headers[tdIndex]] = value === '-' ? null : isNaN(numberValue) ? value : numberValue;
    });
    if (!firstTime) {
      data.push(rowData);
    }
    firstTime = false;
  });

  data.map(item => {
    // Convert the date/time to ISO format
    item['tdOfGreatestEclipse'] = `${item['calendarDate']}T${item['tdOfGreatestEclipse']}Z`;
    delete item['calendarDate'];
    return item;
  }).sort((a, b) => {
    const dateA = new Date(a['Date']);
    const dateB = new Date(b['Date']);
    return dateA.getTime() - dateB.getTime();
  });
  return { data };
}

export function saveJsonToFile(jsonData: any, outputPath: string): void {
  fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
}

function convertToCamelCase(input: string): string {
  let result = input.replace(/<br>/g, ' ');
  result = result.replace(/(.* )km$/g, '$1');
  result = result.replace(/(.* )m$/g, '$1');
  result = result.replace(/(.* )s$/g, '$1');
  result = result.replace(/(.* )°$/g, '$1');
  const specialCharMap: { [key: string]: string } = {
      'Δ': 'Delta ',
      // Add more special characters and their alternative spellings as needed
  };

  // Replace special characters with their alternatives
  result = result.split('').map(char => specialCharMap[char] || char).join('');
  result = result.toLowerCase();

  // Convert to camel case
  result = result.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
  );

  return result;
}

function removeInvalidChars(input: string): string {
  const invalidChars = /[^a-zA-Z]/gi; // Matches any character that is not a word character or whitespace
  return input.replace(invalidChars, '');
}

export function convertToValidPropertyName(input: string): string {
  let camelCaseResult = convertToCamelCase(input);
  let validNameResult = removeInvalidChars(camelCaseResult);

  // Ensure the property name does not start with a number
  if (/^\d/.test(validNameResult)) {
      validNameResult = '_' + validNameResult;
  }

  return validNameResult;
}

export function convertDateFormat(input: string): string {
  let result = input.includes(' ') ? input : replaceHyphensExceptFirst(input);

  // Extract year, month, and day from the input string
  const elements = result.split(' ');

  if (elements.length < 3) {
      return input; // Return the original string if it doesn't match the expected format
  }
  const year = elements[0];
  const monthShort = elements[1].substring(0, 3); // Get the first three characters of the month
  const day = elements[2].padStart(2, '0'); // Pad the day with leading zero if necessary

  // Map short month names to full month names
  const monthMap: { [key: string]: string } = {
      'Jan': '01', 'Feb': '02', 'Mar': '03',
      'Apr': '04', 'May': '05', 'Jun': '06',
      'Jul': '07', 'Aug': '08', 'Sep': '09',
      'Oct': '10', 'Nov': '11', 'Dec': '12'
  };

  // Get the full month name and convert it to zero-padded format
  const month = monthMap[monthShort];
  // Return the date in the desired format
  return `${year}-${month}-${day}`;
}

function replaceHyphensExceptFirst(str: string): string {
  if (str.length === 0) return str;
  const firstChar = str[0];
  const modifiedString = str.slice(1).replace(/-/g, ' ');
  return firstChar + modifiedString;
}
