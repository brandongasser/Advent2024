import * as Part1 from '../part-1';

describe('Day 9 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const testInput = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined,
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];

            const result = Part1.part1(testInput);

            expect(result).toEqual(1928);
        });
    });

    describe('compress', () => {
        it('should compress the filesystem', () => {
            const filesystem = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined,
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];
            const expected = [0, 0, 9, 9, 8, 1, 1, 1, 8, 8, 8, 2, 7, 7, 7, 3, 3, 3, 6, 4, 4, 6, 5, 5, 5, 5, 6, 6, undefined, undefined, undefined,
                undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

            const result = Part1.compress(filesystem);

            expect(result).toEqual(expected);
        });
    });
});