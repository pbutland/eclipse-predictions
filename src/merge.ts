import { JSDOM } from 'jsdom';

/**
 * Merges multiple HTML tables into a single table.
 * The first table is used as a template for the merged table.
 * Only tables that have the first row start with "Catalog of" are included.
 * The second row of the first table is used as the header for the merged table.
 *
 * @param {string} html - The HTML string containing multiple tables.
 * @returns {string} - The HTML string of the merged table.
 */
export function mergeTables(html: string): string {
    let firstTime = true;
    const dom = new JSDOM(html);
    const tables = dom.window.document.querySelectorAll('table');
    const mergedTable = dom.window.document.createElement('table');

    // Function to clone a row and its cells
    function cloneRow(row: HTMLTableRowElement): HTMLTableRowElement {
        const newRow = dom.window.document.createElement('tr');
        for (let i = 0; i < row.cells.length; i++) {
            const cell = row.cells[i];
            const newCell = cell.cloneNode(true) as HTMLElement;
            newRow.appendChild(newCell);
        }
        return newRow;
    }

    // Function to clone a table and its rows
    function cloneTable(table: HTMLTableElement): void {
        if (!table.rows[0].cells[0].textContent?.startsWith('Catalog of')) {
            // Skip other tables
            return;
        }

        let startIdx = 2;
        if (firstTime) {
            startIdx = 1;
            firstTime = false;
        }
        for (let i = startIdx; i < table.rows.length; i++) {
            const row = table.rows[i];
            const newRow = cloneRow(row);
            mergedTable.appendChild(newRow);
        }
    }

    // Clone each table and append its rows to the merged table
    tables.forEach(cloneTable);

    return mergedTable.outerHTML;
}