export function parse(input: string, part: number): number[][] {
    const reports = input.split('\n');

    const result: number[][] = [];
    for (const report of reports) {
        const levels = report.split(' ').map(n => +n);
        result.push(levels);
    }
    
    return result;
}