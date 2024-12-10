export function parse(input: string, part: number): any {
    return input.split('\n').map(line => {
        const row: number[] = [];
        for (let i = 0; i < line.length; i++) {
            row.push(+line[i]);
        }
        return row;
    });
}