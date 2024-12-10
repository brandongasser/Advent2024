import { neighbors } from "./common";

export function part2(input: number[][]): number {
    let answer = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (input[i][j] === 0) {
                answer += rating(input, [ i, j ]);
            }
        }
    }
    return answer;
}

export function rating(grid: number[][], position: [ number, number ]): number {
    const memo: { [key: string]: number } = {};
    
    function subRating(pos: [ number, number ]): number {
        if (grid[pos[0]][pos[1]] === 9) {
            return 1;
        }
        if (memo[JSON.stringify(pos)] !== undefined) {
            return memo[JSON.stringify(pos)];
        }

        let result = 0;
        neighbors(grid, pos).forEach(p => result += subRating(p));
        return result;
    }
    
    return subRating(position);
}