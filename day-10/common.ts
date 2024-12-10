export function neighbors(grid: number[][], position: [ number, number ]): [ number, number ][] {
    const candidates = [
        [ position[0] - 1, position[1] ],
        [ position[0] + 1, position[1] ],
        [ position[0], position[1] - 1 ],
        [ position[0], position[1] + 1 ]
    ].filter(pos => pos[0] >= 0 && pos[0] < grid.length && pos[1] >= 0 && pos[1] < grid[0].length) as [ number, number ][];

    return candidates.filter(pos => grid[pos[0]][pos[1]] === grid[position[0]][position[1]] + 1);
}