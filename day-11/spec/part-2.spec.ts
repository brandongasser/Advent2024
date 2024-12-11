import * as Part2 from '../part-2';

describe('Day 11 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2([ 125, 17 ]);

            expect(result).toEqual(65601038650482);
        });
    });
});