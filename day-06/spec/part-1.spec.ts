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
});