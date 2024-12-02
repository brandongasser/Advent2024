import { count, fold, zipWith } from "../utils/utils";

export function part2(input: number[][]): number {
    return fold(input, (acc, report) => isSafe(report) ? acc + 1 : acc, 0);
}

export function test(differences: number[]): boolean {
    return !differences.includes(0) && !differences.find(x => Math.abs(x) > 3) && !(differences.find(x => x > 0) && differences.find(x => x < 0));
}

export function isSafe(report: number[]): boolean {
    const differences = zipWith(report, report.slice(1), (a, b) => b - a);

    if (test(differences)) {
        return true;
    }

    let problemIndex = -1;
    if (differences.includes(0)) {
        problemIndex = differences.indexOf(0);
    }
    if (differences.find(x => Math.abs(x) > 3)) {
        problemIndex = differences.findIndex(x => Math.abs(x) > 3);
    }
    if (differences.find(x => x > 0) && differences.find(x => x < 0)) {
        if (count(differences, x => x < 0) < count(differences, x => x > 0)) {
            problemIndex = differences.findIndex(x => x < 0);
        } else {
            problemIndex = differences.findIndex(x => x > 0);
        }
    }

    return test(removeReading(differences, problemIndex)) || test(removeReading(differences, problemIndex + 1));
}

export function removeReading(differences: number[], differenceIndex: number): number[] {
    if (differenceIndex === 0) {
        return differences.slice(1);
    }
    return [
        ...differences.slice(0, differenceIndex - 1),
        differences[differenceIndex - 1] + differences[differenceIndex],
        ...differences.slice(differenceIndex + 1)
    ];
}