import * as Part1 from '../part-1';

describe('Day 7 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const input = [
                { result: 190, nums: [ 10, 19 ] },
                { result: 3267, nums: [ 81, 40, 27 ] },
                { result: 83, nums: [ 17, 5 ] },
                { result: 156, nums: [ 15, 6 ] },
                { result: 7290, nums: [ 6, 8, 6, 15 ] },
                { result: 161011, nums: [ 16, 10, 13 ] },
                { result: 192, nums: [ 17, 8, 14 ] },
                { result: 21037, nums: [ 9, 7, 18, 13 ] },
                { result: 292, nums: [ 11, 6, 16, 20 ] }
            ];
            
            const result = Part1.part1(input);

            expect(result).toEqual(3749);
        });
    });

    describe('isPossible', () => {
        it('should return true for a possible calibration equation', () => {
            const result = Part1.isPossible({ result: 292, nums: [ 11, 6, 16, 20 ] });

            expect(result).toBeTrue();
        });

        it('should return false for an impossible calibration equation', () => {
            const result = Part1.isPossible({ result: 21037, nums: [ 9, 7, 18, 13 ] });

            expect(result).toBeFalse();
        });
    });
});