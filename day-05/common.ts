export function makeComparator(orderings: any): (x: number, y: number) => number {
    return (x, y) => orderings[JSON.stringify([x, y])] || 0;
}