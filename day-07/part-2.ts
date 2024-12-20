export function part2(input: { result: number, nums: number[] }[]): number {
    let answer = 0;
    for (const equation of input) {
        if (isPossible(equation)) {
            answer += equation.result;
        }
    }
    return answer;
}

export function isPossible(equation: { result: number, nums: number[] }): boolean {
    const cases = Math.pow(3, equation.nums.length - 1);

    for (let i = 0; i < cases; i++) {
        const flags = i.toString(3).padStart(equation.nums.length - 1, '0');
        let result = equation.nums[0];
        for (let j = 1; j < equation.nums.length; j++) {
            if (flags[j - 1] === '0') {
                result += equation.nums[j];
            } else if (flags[j - 1] === '1') {
                result *= equation.nums[j];
            } else {
                result = +(result.toString() + equation.nums[j]);
            }
        }
        if (result === equation.result) {
            return true;
        }
    }
    return false;
}