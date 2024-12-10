import { neighbors } from "./common";

export function part1(input: number[][]): number {
    let answer = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (input[i][j] === 0) {
                answer += score(input, [ i, j ]);
            }
        }
    }
    return answer;
}

export function score(grid: number[][], position: [ number, number ]): number {
    function bfs(round: number, current: Set<string>): number {
        if (round === 9) {
            return current.size;
        }
        const next: Set<string> = new Set();
        for (const pos of current) {
            neighbors(grid, JSON.parse(pos)).forEach(p => next.add(JSON.stringify(p)));
        }
        return bfs(round + 1, next);
    }
    return bfs(0, new Set([JSON.stringify(position)]));
}