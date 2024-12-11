import { changeState } from "./common";

export function part1(input: number[]): number {
    let state = input;
    for (let i = 0; i < 25; i++) {
        state = blink(state);
    }
    return state.length;
}

export function blink(rocks: number[]): number[] {
    return rocks.flatMap(changeState);
}