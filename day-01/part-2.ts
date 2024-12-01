export function part2(input: number[][]): number {
    const rightCounts = getCounts(input[1]);
    let result = 0;
    for (const num of input[0]) {
        if (rightCounts[num]) {
            result += num * rightCounts[num];
        }
    }
    return result;
}

export function getCounts(nums: number[]): { [n: number]: number } {
    let memo: { [n: number]: number } = {};
    for (const num of nums) {
        if (!memo[num]) {
            memo[num] = 0;
        }
        memo[num]++;
    }
    return memo;
}