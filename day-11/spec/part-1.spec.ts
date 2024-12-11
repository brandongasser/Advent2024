import * as Part1 from '../part-1';

describe('Day 11 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const input = [ 125, 17 ];

            const result = Part1.part1(input);

            expect(result).toEqual(55312);
        });
    });
});