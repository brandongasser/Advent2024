import { move } from "../day-06/common";

export function part2(input: (number | undefined)[]): number {
    compress(input);

    let result = 0;
    for (let i = 0; i < input.length; i++) {
        result += i * (input[i] || 0);
    }
    return result;
}

export function compress(filesystem: (number | undefined)[]): (number | undefined)[] {
    const moved: Set<number> = new Set();

    let current = filesystem[filesystem.length - 1]!;
    let currentStart = filesystem.length - 1;
    let currentEnd = filesystem.length;
    while (currentStart > -1) {
        if (filesystem[currentStart] === current) {
            currentStart--;
            continue;
        }
        currentStart++;
        for (let moveStart = 0; moveStart < currentStart; moveStart++) {
            if (filesystem.slice(moveStart, moveStart + currentEnd - currentStart).every(x => x === undefined)) {
                for (let i = 0; i < currentEnd - currentStart; i++) {
                    filesystem[currentStart + i] = undefined;
                    filesystem[moveStart + i] = current;
                }
                break;
            }
        }
        if (currentStart === 0) {
            break;
        }
        moved.add(current);
        currentStart--;
        while (filesystem[currentStart] === undefined && !moved.has(filesystem[currentStart]!)) {
            currentStart--;
        }
        currentEnd = currentStart + 1;
        current = filesystem[currentStart]!;
    }
    return filesystem;
}