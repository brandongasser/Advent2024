import { product } from "../utils/utils";
import { Program } from "./common";

export function part2(input: Program): number {
    let allow = true;
    let answer = 0;

    for (const instruction of input) {
        if (instruction === 'do') {
            allow = true;
        } else if (instruction === 'dont') {
            allow = false;
        } else if (allow) {
            answer += product(instruction);
        }
    }

    return answer;
}