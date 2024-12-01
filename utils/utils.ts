export function sum(nums: number[]): number {
    return nums.reduce((acc, x) => x + acc);
}

export function product(nums: number[]): number {
    return nums.reduce((acc, x) => x * acc);
}

export function transpose<T>(xss: T[][]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < xss[0].length; i++) {
        const row: T[] = [];
        for (let x = 0; x < xss.length; x++) {
            row.push(xss[x][i]);
        }
        result.push(row);
    }
    return result;
}

export function zip<A, B>(xs: A[], ys: B[]): [A, B][] {
    const result: [A, B][] = [];
    for (let i = 0; i < xs.length && i < ys.length; i++) {
        result.push([xs[i], ys[i]]);
    }
    return result;
}

export function zipWith<A, B, C>(xs: A[], ys: B[], f: (a: A, b: B) => C): C[] {
    const result: C[] = [];
    for (let i = 0; i < xs.length && i < ys.length; i++) {
        result.push(f(xs[i], ys[i]));
    }
    return result;
}