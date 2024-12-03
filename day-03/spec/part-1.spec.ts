import { Program } from '../common';
import * as Part1 from '../part-1';

const input: Program = [
    [2, 4],
    [5, 5],
    [11, 8],
    [8, 5]
];

describe('Day 3 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(input);

            expect(result).toEqual(161);
        });
    });
});