import * as Part2 from '../part-2';

describe('Day 9 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const testInput = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined, 
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];

            const result = Part2.part2(testInput);

            expect(result).toEqual(2858);
        });
    });

    describe('compress', () => {
        it('should compress the filesystem', () => {
            const filesystem = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined, 
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];
            const expected = [0, 0, 9, 9, 2, 1, 1, 1, 7, 7, 7, undefined, 4, 4, undefined, 3, 3, 3, undefined, undefined, undefined, undefined,
                5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, undefined, undefined, undefined, undefined, 8, 8, 8, 8, undefined, undefined];

            const result = Part2.compress(filesystem);

            expect(result).toEqual(expected);
        });
    });
});