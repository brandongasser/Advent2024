import * as Part2 from '../part-2';

const testInput = [
    [ 7, 6, 4, 2, 1 ],
    [ 1, 2, 7, 8, 9 ],
    [ 9, 7, 6, 2, 1 ],
    [ 1, 3, 2, 4, 5 ],
    [ 8, 6, 4, 4, 1 ],
    [ 1, 3, 6, 7, 9 ]
];

describe('Day 2 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(testInput);

            expect(result).toEqual(4);
        });
    });

    describe('test', () => {
        it('should return true for safe differences', () => {
            const result = Part2.test([ -1, -2, -2, -1 ]);

            expect(result).toBeTrue();
        });

        it('should return false when there is a 0 difference', () => {
            const result = Part2.test([ 1, 0, 2, 1 ]);

            expect(result).toBeFalse();
        });

        it('should return false when there is a difference > 3', () => {
            const result = Part2.test([ 1, 2, 4, 1 ]);

            expect(result).toBeFalse();
        });

        it('should return false when there is a difference < -3', () => {
            const result = Part2.test([ -1, -4, -2, -1 ]);

            expect(result).toBeFalse();
        });

        it('should return false when there is a mix of increases and decreases', () => {
            const result = Part2.test([ 1, -2, 2, 1 ]);

            expect(result).toBeFalse();
        });
    });

    describe('isSafe', () => {
        it('should return true for decreasing reports', () => {
            const result = Part2.isSafe([ 7, 6, 4, 2, 1 ]);

            expect(result).toBeTrue();
        });

        it('should return true for increasing reports', () => {
            const result = Part2.isSafe([ 1, 3, 6, 7, 9 ]);

            expect(result).toBeTrue();
        });

        it('should return true for dampened errors', () => {
            const result = Part2.isSafe([ 1, 3, 2, 4, 5 ]);

            expect(result).toBeTrue();
        });

        it('should return false for undampened errors', () => {
            const result = Part2.isSafe([ 1, 2, 7, 8, 9 ]);
            
            expect(result).toBeFalse();
        });
    });

    describe('removeReading', () => {
        it('should remove a reading', () => {
            const result = Part2.removeReading([ 2, -1, 2, 1 ], 1);
            
            expect(result).toEqual([ 1, 2, 1 ]);
        });

        it('should remove a reading from the beginning', () => {
            const result = Part2.removeReading([ 2, -1, 2, 1 ], 0);

            expect(result).toEqual([ -1, 2, 1 ]);
        });
    });
});