import { parse } from '../parser';
import * as Part2 from '../part-2';

const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const parsedTestInput = parse(testInput, 2);

describe('Day 4 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(parsedTestInput);

            expect(result).toEqual(9);
        });
    });

    describe('isValidGroup', () => {
        it('should return true for a valid group', () => {
            const group: [string, string, string] = ['MXM', 'XAX', 'SXS'];

            const result = Part2.isValidGroup(group);

            expect(result).toEqual(true);
        });
    })
});