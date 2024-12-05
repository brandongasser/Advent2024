export function parse(input: string, part: number): { orderings: any, lists: number[][] } {
    const [ rawOrderings, rawLists ] = input.split('\n\n');

    return { orderings: parseOrderings(rawOrderings), lists: parseLists(rawLists) };
}

export function parseOrderings(input: string): any {
    const orderings = input.split('\n');

    const result: any = {};
    for (const ordering of orderings) {
        const [ x, y ] = ordering.split('|').map(n => +n);
        result[JSON.stringify([x, y])] = -1;
        result[JSON.stringify([y, x])] = 1;
    }
    
    return result;
}

export function parseLists(input: string): number[][] {
    const lists = input.split('\n');

    return lists.map(list => list.split(',').map(n => +n));
}