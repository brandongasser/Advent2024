import { sum } from "../utils/utils";
import { blink } from "./common";

export function part2(input: number[]): number {
    return sum(input.map(rock => blink(75, rock)));
}