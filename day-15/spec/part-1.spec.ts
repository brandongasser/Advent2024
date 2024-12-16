import { Tile } from '../common';
import { parse } from '../parser';
import * as Part1 from '../part-1';

const rawTestInput = `##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`;

describe('Day 15 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const testInput = parse(rawTestInput, 1);

            const result = Part1.part1(testInput);

            expect(result).toEqual(10092);
        });
    });
    
    describe('doMove', () => {
        it('should move up', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 2, 1 ], '^');

            expect(result).toEqual([ 1, 1 ]);
        });

        it('should move right', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 2, 1 ], '>');

            expect(result).toEqual([ 2, 2 ]);
        });

        it('should move down', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 1, 1 ], 'v');

            expect(result).toEqual([ 2, 1 ]);
        });

        it('should move left', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 2, 2 ], '<');

            expect(result).toEqual([ 2, 1 ]);
        });

        it('should not move when moving into a wall', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 1, 1 ], '^');

            expect(result).toEqual([ 1, 1 ]);
        });

        it('should not move when moving pushing a box into a wall', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            const expectedMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 2, 1 ], '^');

            expect(testMap).toEqual(expectedMap);
            expect(result).toEqual([ 2, 1 ]);
        });

        it('should push boxes', () => {
            const testMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            const expectedMap: Tile[][] = [
                [ '#', '#', '#', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', 'O', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '.', '.', '#' ],
                [ '#', '#', '#', '#' ]
            ] as Tile[][];
            
            const result = Part1.doMove(testMap, [ 4, 1 ], '^');

            expect(testMap).toEqual(expectedMap);
            expect(result).toEqual([ 3, 1 ]);
        });
    });
});