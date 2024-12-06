import { parse } from '../parser';
import * as Part1 from '../part-1';

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

describe('Day 6 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const input = parse(testInput, 1);

            const result = Part1.part1(input);

            expect(result).toEqual(41);
        });
    });

    describe('move', () => {
        const labMap = [
            [ false, false, false ],
            [ false, true, false ],
            [ false, false, false ]
        ];

        it('should move the guard up', () => {
            const result = Part1.move(labMap, { orientation: 'up', position: [ 1, 0 ] });

            expect(result).toEqual({ orientation: 'up', position: [ 0, 0 ]})
        });

        it('should move the guard down', () => {
            const result = Part1.move(labMap, { orientation: 'down', position: [ 1, 0 ] });

            expect(result).toEqual({ orientation: 'down', position: [ 2, 0 ] });
        });

        it('should move the guard left', () => {
            const result = Part1.move(labMap, { orientation: 'left', position: [ 0, 1 ] });

            expect(result).toEqual({ orientation: 'left', position: [ 0, 0 ] });
        });

        it('should move the guard right', () => {
            const result = Part1.move(labMap, { orientation: 'right', position: [ 0, 1 ]});

            expect(result).toEqual({ orientation: 'right', position: [ 0, 2 ]});
        });

        it('should rotate the guard if there is an obstacle in front of her', () => {
            const result = Part1.move(labMap, { orientation: 'up', position: [ 2, 1 ]});

            expect(result).toEqual({ orientation: 'right', position: [ 2, 1 ] });
        });

        it('should return done when the guard leaves the lab', () => {
            const result = Part1.move(labMap, { orientation: 'up', position: [ 0, 0 ] });

            expect(result).toEqual('done');
        });
    });
})