import * as Parser from '../parser';

describe('Day 8 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const testInput = '2333133121414131402';
            const expected = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined,
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const testInput = '2333133121414131402';
            const expected = [0, 0, undefined, undefined, undefined, 1, 1, 1, undefined, undefined, undefined, 2, undefined, undefined, undefined,
                3, 3, 3, undefined, 4, 4, undefined, 5, 5, 5, 5, undefined, 6, 6, 6, 6, undefined, 7, 7, 7, undefined, 8, 8, 8, 8, 9, 9];

            const result = Parser.parse(testInput, 2);

            expect(result).toEqual(expected);
        });
    });
});