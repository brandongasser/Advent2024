import { distinct } from "../utils/utils";
import { GuardState, LabMap, move } from "./common";

export function part1(input: { labMap: LabMap, guardState: GuardState }): number {
    const locationHashes: number[] = [];

    let currentState: GuardState | 'done' = input.guardState
    do {
        locationHashes.push(currentState.position[0] * 648391 + currentState.position[1] * 2269733);
        currentState = move(input.labMap, currentState);
    } while (currentState !== 'done');

    return distinct(locationHashes).length;
}