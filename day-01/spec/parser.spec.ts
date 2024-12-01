import * as Parser from '../parser';

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

const parsedInput = [ [ 1, 2, 3, 3, 3, 4 ], [ 3, 3, 3, 4, 5, 9 ] ];

describe('Day 1 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const result = Parser.parse(testInput, 1);
            expect(result).toEqual(parsedInput);
        });

        it('should parse input for part 2', () => {
            const result = Parser.parse(testInput, 2);
            expect(result).toEqual(parsedInput);
        });
    });
});