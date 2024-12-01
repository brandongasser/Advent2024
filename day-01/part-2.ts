import { count } from "../utils/utils";

export function part2(input: number[][]): number {
    let result = 0;
    for (const num of input[0]) {
        result += num * count(input[1], x => x === num);
    }
    return result;
}