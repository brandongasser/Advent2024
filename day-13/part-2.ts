import { Vector } from "../utils/linear-algebra";
import { sum } from "../utils/utils";
import { ClawMachine, winCost } from "./common";

export function part2(input: ClawMachine[]): number {
    const clawMachines = input.map(clawMachine => ({
        a: clawMachine.a,
        b: clawMachine.b,
        prize: clawMachine.prize.plus(new Vector<2>(10000000000000, 10000000000000))
    }));
    return sum(clawMachines.map(winCost).filter(cost => cost !== null));
}