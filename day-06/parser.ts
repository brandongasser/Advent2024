import { GuardState, LabMap } from "./common";

export function parse(input: string, part: number): { labMap: LabMap, guardState: GuardState } {
    const rows = input.split('\n');
    const labMap: LabMap = [];
    let guardState: GuardState = { orientation: 'up', position: [ 0, 0 ] };
    
    for (let i = 0; i < rows.length; i++) {
        const row: boolean[] = [];
        for (let j = 0; j < rows[i].length; j++) {
            if (rows[i][j] === '^') {
                guardState = { orientation: 'up', position: [ i, j ] };
            }
            row.push(rows[i][j] === '#');
        }
        labMap.push(row);
    }

    return {
        labMap,
        guardState
    };
}