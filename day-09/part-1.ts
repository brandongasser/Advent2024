export function part1(input: (number | undefined)[]): number {
    compress(input);

    let result = 0;
    for (let i = 0; input[i] !== undefined; i++) {
        result += i * input[i]!;
    }
    return result;
}

export function compress(filesystem: (number | undefined)[]): (number | undefined)[] {
    for (let i = 0, j = filesystem.length - 1; i < j; i++) {
        if (filesystem[i] === undefined) {
            filesystem[i] = filesystem[j];
            filesystem[j] = undefined;
            while (filesystem[j] === undefined) {
                j--;
            }
        }
    }
    return filesystem;
}