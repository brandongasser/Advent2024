import { fold, zipWith } from "../utils/utils";

export function part1(input: number[][]): number {
    return fold(input, (count, report) => isSafe(report) ? count + 1 : count, 0);
}

export function isSafe(report: number[]): boolean {
    const differences = zipWith(report, report.slice(1), (a, b) => b - a);

    if (differences.includes(0)) {
        return false;
    }

    if (differences.find(x => Math.abs(x) > 3)) {
        return false;
    }

    if (differences.find(x => x < 0) && differences.find(x => x > 0)) {
        return false;
    }

    return true;
}