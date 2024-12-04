import { distinct } from "../utils/utils";
import { Crossword } from "./part-1";

export function parse(input: string, part: number): any {
    if (part === 1) {
        return part1(input);
    }
    return part2(input);
}

function part1(input: string): Crossword {
    const rows = input.split('\n');

    const cols: string[] = [];
    for (let i = 0; i < rows[0].length; i++) {
        let col = '';
        for (let r = 0; r < rows.length; r++) {
            col += rows[r][i];
        }
        cols.push(col);
    }

    const diagonals = distinct([...getDownLeftDiagonals(rows), ...getDownLeftDiagonals(rows.reverse())]);

    return { rows, cols, diagonals };
}

export function getDownLeftDiagonals(rows: string[]): string[] {
    const diagonals: string[] = [];

    for (let i = 0; i < rows.length * 2 - 1; i++) {
        let diagonal = '';
        for (let row = 0; row < rows.length; row++) {
            if (rows[row][i - row]) {
                diagonal += rows[row][i - row];
            }
        }
        diagonals.push(diagonal);
    }

    return diagonals;
}

function part2(input: string): [string, string, string][] {
    const groups: [string, string, string][] = [];

    const rows = input.split('\n');

    for (let i = 0; i < rows.length - 2; i++ ) {
        for (let j = 0; j < rows[0].length - 2; j++) {
            groups.push([rows[i].slice(j, j + 3), rows[i + 1].slice(j, j + 3), rows[i + 2].slice(j, j + 3)]);
        }
    }
    
    return groups;
}