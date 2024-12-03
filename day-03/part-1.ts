import { product, sum } from "../utils/utils";
import { Program } from "./common";

export function part1(input: Program): number {
    return sum(input.filter(instruction => instruction !== 'do' && instruction !== 'dont').map(instruction => product(instruction)));
}