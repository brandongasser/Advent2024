import * as Parser from '../parser';

const testInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

describe('Day 7 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected = [
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

            const result = Parser.parse(testInput, 1);

            expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
        });

        it('should parse input for part 2', () => {
            const expected = [
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

            const result = Parser.parse(testInput, 1);

            expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
        });
    });
});