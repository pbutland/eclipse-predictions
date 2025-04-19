import * as fs from 'fs';
import * as path from 'path';
import { mergeTables } from './merge';
import { parseHtmlToJson, saveJsonToFile } from './parse';

/**
 * Processes the given files, converts them to JSON format, and saves them to the specified output directory.
 * @param {string} outputDir - The directory where the JSON files will be saved.
 * @param {...string} files - The list of HTML files to be processed.
 * @returns {void}
 */
function processFiles(outputDir: string, ...files: string[]): void {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const file of files) {
        const baseName = path.parse(path.basename(file)).name;
        const jsonFileName = path.join(outputDir, baseName + path.extname(baseName).replace('.', '') + '.json');
        
        const fileContent = fs.readFileSync(file, 'utf-8');
        console.log(`Processing file: ${file}`);
        const table = mergeTables(fileContent);

        try {
            const jsonData = parseHtmlToJson(table);
            saveJsonToFile(jsonData, jsonFileName);
            console.log(`Data successfully converted and saved to ${jsonFileName}`);
        } catch (error) {
            console.error('Error processing the file:', error);
        }
    }
}

/**
 * Main function to process files and convert them to JSON format.
 * Usage: node main.js <outputDir> <file1> [file2] ...
 */
function run(): void {
    if (process.argv.length < 4) {
        console.error('Usage: yarn convert <outputDir> <file1> [file2] ...');
        process.exit(1);
    }

    const outputDir = process.argv[2];
    const filesToConvert = process.argv.slice(3);

    processFiles(outputDir, ...filesToConvert);
}

run();