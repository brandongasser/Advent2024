import { sum, zipWith } from "../utils/utils";

export function part1(input: number[][]): number {
    return sum(zipWith(input[0], input[1], (a, b) => Math.abs(a - b)));
}