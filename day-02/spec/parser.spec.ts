import * as Parser from '../parser';

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const parsedInput = [
    [ 7, 6, 4, 2, 1 ],
    [ 1, 2, 7, 8, 9 ],
    [ 9, 7, 6, 2, 1 ],
    [ 1, 3, 2, 4, 5 ],
    [ 8, 6, 4, 4, 1 ],
    [ 1, 3, 6, 7, 9 ]
];

describe('Day 2 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(parsedInput);
        });
    });
});