import { Vector } from "../utils/linear-algebra";
import { sum } from "../utils/utils";
import { ClawMachine } from "./common";

export function part1(input: ClawMachine[]): number {
    return sum(input.map(winCost).filter(cost => cost !== null));
}

export function winCost(clawMachine: ClawMachine): number | null {
    const memo: { [args: string]: number | null } = {};
    
    function calculateWinCost(current: Vector<2>): number | null {
        if (current.getComponents()[0] === clawMachine.prize.getComponents()[0] && current.getComponents()[1] === clawMachine.prize.getComponents()[1]) {
            return 0;
        }
        if (current.getComponents()[0] > clawMachine.prize.getComponents()[0] || current.getComponents()[1] > clawMachine.prize.getComponents()[1]) {
            return null;
        }
        if (memo[JSON.stringify(current)] !== undefined) {
            return memo[JSON.stringify(current)];
        }

        const aSubCost = calculateWinCost(current.plus(clawMachine.a));
        const aCost = aSubCost === null ? null : 3 + aSubCost;

        const bSubCost = calculateWinCost(current.plus(clawMachine.b));
        const bCost = bSubCost === null ? null : 1 + bSubCost;

        let cost;
        if (aCost === null) {
            cost = bCost;
        } else if (bCost === null) {
            cost = aCost;
        } else {
            cost = Math.min(aCost, bCost);
        }
        memo[JSON.stringify(current)] = cost;

        return cost;
    }

    return calculateWinCost(new Vector(0, 0));
}