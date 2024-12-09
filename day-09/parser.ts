export function parse(input: string, part: number): any {
    const result: (number | undefined)[] = [];

    let idCounter = 0;
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < +input[i]; j++) {
                result.push(idCounter);
            }
            idCounter++;
        } else {
            for (let j = 0; j < +input[i]; j++) {
                result.push(undefined);
            }
        }
    }

    return result;
}