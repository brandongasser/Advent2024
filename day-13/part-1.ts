import { sum } from "../utils/utils";
import { ClawMachine, winCost } from "./common";

export function part1(input: ClawMachine[]): number {
    return sum(input.map(winCost).filter(cost => cost !== null));
}