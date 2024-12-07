export function part1(input: { result: number, nums: number[] }[]): number {
    let answer = 0;
    for (const equation of input) {
        if (isPossible(equation)) {
            answer += equation.result;
        }
    }
    return answer;
}

export function isPossible(equation: { result: number, nums: number[] }): boolean {
    const cases = Math.pow(2, equation.nums.length - 1);

    for (let i = 0; i < cases; i++) {
        let result = equation.nums[0];
        for (let j = 1; j < equation.nums.length; j++) {
            if (i & Math.pow(2, j - 1)) {
                result += equation.nums[j];
            } else {
                result *= equation.nums[j];
            }
        }
        if (result === equation.result) {
            return true;
        }
    }
    return false;
}