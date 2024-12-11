import { sum } from "../utils/utils";
import { changeState } from "./common";

export function part2(input: number[]): number {
    return sum(input.map(rock => blink(75, rock)));
}

const memo: { [key: string]: number } = {};

export function blink(times: number, rock: number): number {
    if (times === 0) {
        return 1;
    }
    const key = JSON.stringify([times, rock]);
    if (memo[key]) {
        return memo[key];
    }
    const answer = sum(changeState(rock).map(r => blink(times - 1, r)));
    memo[key] = answer;
    return answer;
}