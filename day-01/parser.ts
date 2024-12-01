import { transpose } from "../utils/utils";

export function parse(input: string, part: number): number[][] {
    const lines = input.split('\n');
    const raw: number[][] = [];
    for (const line of lines) {
        const row: number[] = [];
        const [ a, b ] = line.split(/\s+/);
        row.push(+a);
        row.push(+b);
        raw.push(row);
    }
    const result = transpose(raw);

    result[0].sort((a, b) => a - b);
    result[1].sort((a, b) => a - b);

    return result;
}