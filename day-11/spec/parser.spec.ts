import * as Parser from '../parser';

const testInput = '0 1 10 99 999';

describe('Day 11 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected = [ 0, 1, 10, 99, 999 ];

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const expected = [ 0, 1, 10, 99, 999 ];

            const result = Parser.parse(testInput, 2);

            expect(result).toEqual(expected);
        });
    });
});