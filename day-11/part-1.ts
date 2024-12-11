import { sum } from "../utils/utils";
import { blink } from "./common";

export function part1(input: number[]): number {
    return sum(input.map(rock => blink(25, rock)));
}