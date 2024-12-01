import * as Part2 from '../part-2';

const input = [ [ 1, 2, 3, 3, 3, 4 ], [ 3, 3, 3, 4, 5, 9 ] ];

describe('Day 1 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            spyOn(Part2, 'getCounts').and.returnValue({
                3: 3,
                4: 1,
                5: 1,
                9: 1
            });
            const result = Part2.part2(input);
            expect(result).toEqual(31);
        });
    });

    describe('getCounts', () => {
        it('should memoize the counts of numbers in the list', () => {
            const result = Part2.getCounts(input[1]);
            const expected = {
                3: 3,
                4: 1,
                5: 1,
                9: 1
            };
            expect(result).toEqual(expected);
        });
    })
});