import { GuardState } from '../common';
import { parse } from '../parser';
import * as Part2 from '../part-2';

const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

describe('Day 6 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const input = parse(testInput, 2);

            const result = Part2.part2(input);

            expect(result).toEqual(6);
        });
    });

    describe('testObstacle', () => {
        const input = parse(testInput, 2);

        it('should return false for obstacles that do not cause a paradox', () => {
            const result = Part2.testObstacle(input.labMap, input.guardState, [ 2, 4 ]);

            expect(result).toBeFalse();
        });

        it('should return true for obstacles that cause a paradox', () => {
            const result = Part2.testObstacle(input.labMap, input.guardState, [ 6, 3 ]);

            expect(result).toBeTrue();
        });
    });

    describe('normalStates', () => {
        it('should return potential obstacle locations', () => {
            const input = parse('.#.\n...\n.^.', 2);
            const expected: GuardState[] = [
                { orientation: 'up', position: [ 2, 1 ] },
                { orientation: 'up', position: [ 1, 1 ] },
                { orientation: 'right', position: [ 1, 1 ] },
                { orientation: 'right', position: [ 1, 2 ] }
            ];

            const result = Part2.normalStates(input.labMap, input.guardState);

            expect(result).toEqual(expected);
        });
    });
});