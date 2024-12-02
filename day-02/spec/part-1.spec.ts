import * as Part1 from '../part-1';

const testInput = [
    [ 7, 6, 4, 2, 1 ],
    [ 1, 2, 7, 8, 9 ],
    [ 9, 7, 6, 2, 1 ],
    [ 1, 3, 2, 4, 5 ],
    [ 8, 6, 4, 4, 1 ],
    [ 1, 3, 6, 7, 9 ]
];

describe('Day 2 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(testInput);

            expect(result).toEqual(2);
        });
    });

    describe('isSafe', () => {
        it('should return true for decreasing reports', () => {
            const result = Part1.isSafe([ 7, 6, 4, 2, 1 ]);

            expect(result).toBeTrue();
        });

        it('should return true for increasing reports', () => {
            const result = Part1.isSafe([ 1, 3, 6, 7, 9 ]);

            expect(result).toBeTrue();
        });

        it('should return false for large increases or decreases', () => {
            const result1 = Part1.isSafe([ 1, 2, 7, 8, 9 ]);
            const result2 = Part1.isSafe([ 9, 7, 6, 2, 1 ]);

            expect(result1).toBeFalse();
            expect(result2).toBeFalse();
        });

        it('should return false for mixed increasing and decreasing', () => {
            const result = Part1.isSafe([ 1, 3, 1 ]);

            expect(result).toBeFalse();
        });

        it('should return false for 0 difference', () => {
            const result = Part1.isSafe([ 8, 6, 4, 4, 2 ]);

            expect(result).toBeFalse();
        });
    });
});