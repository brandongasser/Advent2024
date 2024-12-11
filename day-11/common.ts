import { sum } from "../utils/utils";

export function changeState(rock: number): number[] {
    if (rock === 0) {
        return [ 1 ];
    }
    if (rock.toString().length % 2 === 0) {
        const str = rock.toString();
        return [ +str.slice(0, str.length / 2), +str.slice(str.length / 2) ];
    }
    return [ rock * 2024 ];
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