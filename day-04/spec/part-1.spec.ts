import { parse } from '../parser';
import * as Part1 from '../part-1';

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

const parsedTestInput = parse(testInput, 1);

describe('Day 4 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(parsedTestInput);

            expect(result).toEqual(18);
        });
    });

    describe('countXMAS', () => {
        it('should count forwards and backwards XMAS', () => {
            const input = ['FDASXMASFDSA', 'FJDSAKSAMXFJDS', 'XMASAMX'];

            const result = Part1.countXMAS(input);

            expect(result).toEqual(4);
        });
    });
})