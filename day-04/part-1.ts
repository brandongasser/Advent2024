import { sum } from "../utils/utils";

export type Crossword = {
    rows: string[],
    cols: string[],
    diagonals: string[]
};

export function part1(input: Crossword): number {
    return countXMAS(input.rows) + countXMAS(input.cols) + countXMAS(input.diagonals);
}

export function countXMAS(lines: string[]): number {
    return sum(lines.map(line => (line.match(/XMAS/g) || []).length + (line.match(/SAMX/g) || []).length));
}