import * as Part1 from '../part-1';

const input = [ [ 1, 2, 3, 3, 3, 4 ], [ 3, 3, 3, 4, 5, 9 ] ];

describe('Day 1 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(input);
            expect(result).toEqual(11);
        });
    });
});