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