import { Program } from '../common';
import * as Part2 from '../part-2';

const input: Program = [
    [2, 4],
    'dont',
    [5, 5],
    [11, 8],
    'do',
    [8, 5]
];

describe('Day 3 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(input);

            expect(result).toEqual(48);
        });
    });
});