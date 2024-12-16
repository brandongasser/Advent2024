import { Move, Tile } from "./common";

export function part1(input: { map: Tile[][], moves: Move[], robotPosition: [ number, number ] }): number {
    let currentPosition: [ number, number ] = input.robotPosition;
    for (const move of input.moves) {
        currentPosition = doMove(input.map, currentPosition, move);
    }

    let answer = 0;
    for (let i = 0; i < input.map.length; i++) {
        for (let j = 0; j < input.map[i].length; j++) {
            if (input.map[i][j] === 'O') {
                answer += 100 * i + j;
            }
        }
    }
    return answer;
}

export function doMove(map: Tile[][], robotPosition: [ number, number ], move: Move): [ number, number ] {
    const moveDirection = {
        '^': [ -1, 0 ],
        '>': [ 0, 1 ],
        'v': [ 1, 0 ],
        '<': [ 0, -1 ]
    }[move];

    switch (map[robotPosition[0] + moveDirection[0]][robotPosition[1] + moveDirection[1]]) {
        case '.':
            return [ robotPosition[0] + moveDirection[0], robotPosition[1] + moveDirection[1] ];
        case '#':
            return robotPosition;
        case 'O':
            break;
    }

    let currentPosition = [ robotPosition[0] + moveDirection[0], robotPosition[1] + moveDirection[1] ];
    while (map[currentPosition[0]][currentPosition[1]] === 'O') {
        currentPosition = [ currentPosition[0] + moveDirection[0], currentPosition[1] + moveDirection[1] ];
    }

    if (map[currentPosition[0]][currentPosition[1]] === '#') {
        return robotPosition;
    }

    map[currentPosition[0]][currentPosition[1]] = 'O';
    map[robotPosition[0] + moveDirection[0]][robotPosition[1] + moveDirection[1]] = '.';
    return [ robotPosition[0] + moveDirection[0], robotPosition[1] + moveDirection[1] ];
}