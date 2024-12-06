export type LabMap = boolean[][];

export type Orientation = 'up' | 'down' | 'left' | 'right';

export type GuardState = {
    position: [number, number],
    orientation: Orientation
};

export function rotateRight(orientation: Orientation): Orientation {
    const lookupTable: { [x: string]: Orientation } = {
        'up': 'right',
        'right': 'down',
        'down': 'left',
        'left': 'up'
    }
    return lookupTable[orientation];
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