import * as child_process from 'child_process';

enum EclipseType {
    lunar,
    solar
}

/**
 * Downloads eclipse HTML files for the specified range using curl.
 * The files are saved in the current working directory.
 * 
 * @param {EclipseType} type the type of eclipse data required, i.e. EclipseType.Lunar or EclipseType.Solar
 * @param {number} start the start year for the data
 * @param {number} end the end year for the data
 */
function downloadFiles(type: EclipseType, start: number, end: number): void {
    for (let i = start; i <= end; i += 100) {
        const formattedStart = String(Math.abs(i)).padStart(4, '0');
        const formattedEnd = String(Math.abs(i + 99)).padStart(4, '0')
        const fileName = `${type === EclipseType.lunar ? 'LE' : 'SE'}${i < 0 ? '-' : ''}${formattedStart}-${(i + 99) < 0 ? '-' : ''}${formattedEnd}.html`
        const url = `https://www.eclipsewise.com/${type === EclipseType.lunar ? 'lunar/L' : 'solar/S'}Ecatalog/${fileName}`;

        // execute the curl command
        child_process.execSync(`curl "${url}" -O`);
    }
}

/**
 * Main function to download files
 * Usage: yarn download [lunar|solar] [startYear] [endYear]
 * where `startYear` and `endYear` are the range of years to download and must match a URL on the eclipsewise.com site,
 * e.g. -0599--0100, -1599-2100, etc.
 * `startYear` defaulting to -2999 and `endYear` defaulting to 3000
 */
function run(): void {
    if (process.argv.length < 2 || process.argv.length > 5) {
        console.error('Usage: yarn download [lunar|solar] [startYear] [endYear]');
        process.exit(1);
    }

    const eclipseType = process.argv.length >= 3 ? process.argv[2].toLowerCase() : undefined;
    if (eclipseType !== undefined && eclipseType !== 'lunar' && eclipseType !== 'solar') {
        console.error('Eclipse type must be either "lunar" or "solar"');
        process.exit(1);
    }

    const startYear = process.argv.length >= 4 ? parseInt(process.argv[3]) : -2999;
    if (isNaN(startYear)) {
        console.error('Start year must be a number');
        process.exit(1);
    }

    const endYear = process.argv.length === 5 ? parseInt(process.argv[4]) : 3000;
    if (isNaN(endYear)) {
        console.error('End year must be a number');
        process.exit(1);
    }

    if (eclipseType === undefined) {
        downloadFiles(EclipseType.lunar, startYear, endYear);
        downloadFiles(EclipseType.solar, startYear, endYear);
    } else {
        downloadFiles(eclipseType === 'lunar' ? EclipseType.lunar : EclipseType.solar, startYear, endYear);
    }
}

run();
