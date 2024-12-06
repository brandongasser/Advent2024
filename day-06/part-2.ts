import { GuardState, LabMap, move } from "./common";

export function part2(input: { labMap: LabMap, guardState: GuardState }): number {
    const states = normalStates(input.labMap, input.guardState);
    let answer = 0;
    const checked: Set<string> = new Set();
    checked.add(JSON.stringify(input.guardState.position));
    for (let i = 0; i < states.length - 1; i++) {
        if (JSON.stringify(states[i].position) === JSON.stringify(states[i + 1].position) || checked.has(JSON.stringify(states[i + 1].position))) {
            continue;
        }
        checked.add(JSON.stringify(states[i + 1].position));
        if (testObstacle(input.labMap, states[i], states[i + 1].position)) {
            answer++;
        }
    }
    return answer;
}

export function normalStates(labMap: LabMap, guardState: GuardState): GuardState[] {
    const normalStates: GuardState[] = [];
    let currentState: GuardState | 'done' = guardState;
    do {
        normalStates.push(currentState);
        currentState = move(labMap, currentState);
    } while (currentState !== 'done');
    return normalStates;
}

export function testObstacle(labMap: LabMap, initialState: GuardState, obstaclePosition: [ number, number ]): boolean {
    const labMapCopy = labMap.map(row => [...row]);
    labMapCopy[obstaclePosition[0]][obstaclePosition[1]] = true;

    const seenStates: any = {};

    let currentState: GuardState | 'done' = initialState;
    do {
        if (seenStates[JSON.stringify(currentState)]) {
            return true;
        }
        seenStates[JSON.stringify(currentState)] = true;
        currentState = move(labMapCopy, currentState);
    } while (currentState !== 'done');

    return false;
}