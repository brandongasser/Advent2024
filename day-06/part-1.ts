import { distinct } from "../utils/utils";
import { GuardState, LabMap, rotateRight } from "./common";

export function part1(input: { labMap: LabMap, guardState: GuardState }): number {
    const locationHashes: number[] = [];

    let currentState: GuardState | 'done' = input.guardState
    do {
        locationHashes.push(currentState.position[0] * 648391 + currentState.position[1] * 2269733);
        currentState = move(input.labMap, currentState);
    } while (currentState !== 'done');

    return distinct(locationHashes).length;
}

export function move(labMap: LabMap, currentState: GuardState): GuardState | 'done' {
    const moveVectors = {
        'up': [ -1, 0 ],
        'down': [ 1, 0 ],
        'left': [ 0, -1 ],
        'right': [ 0, 1 ]
    };
    const nextPosition: [ number, number ] = [ currentState.position[0] + moveVectors[currentState.orientation][0], currentState.position[1] + moveVectors[currentState.orientation][1] ];

    if (nextPosition[0] < 0 || nextPosition[0] >= labMap.length || nextPosition[1] < 0 || nextPosition[1] >= labMap[0].length) {
        return 'done';
    }
    
    if (labMap[nextPosition[0]][nextPosition[1]]) {
        return {
            ...currentState,
            orientation: rotateRight(currentState.orientation)
        };
    }

    return {
        ...currentState,
        position: nextPosition
    };
}