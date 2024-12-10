import * as Parser from '../parser';

const testInput = `0123
1234
8765
9876`;

describe('Day 10 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected = [
                [ 0, 1, 2, 3 ],
                [ 1, 2, 3, 4 ],
                [ 8, 7, 6, 5 ],
                [ 9, 8, 7, 6 ]
            ];

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const expected = [
                [ 0, 1, 2, 3 ],
                [ 1, 2, 3, 4 ],
                [ 8, 7, 6, 5 ],
                [ 9, 8, 7, 6 ]
            ];

            const result = Parser.parse(testInput, 2);

            expect(result).toEqual(expected);
        });
    });
});