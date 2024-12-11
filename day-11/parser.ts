export function parse(input: string, part: number): any {
    return input.split(' ').map(n => + n);
}