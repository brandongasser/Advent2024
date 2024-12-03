import { Program } from '../common';
import * as Parser from '../parser';

const testInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const parsedInput: Program = [
    [2, 4],
    [5, 5],
    [11, 8],
    [8, 5]
];

describe('Day 3 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(parsedInput);
        });
    });
});