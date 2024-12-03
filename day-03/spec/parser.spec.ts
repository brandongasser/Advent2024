import { Program } from '../common';
import * as Parser from '../parser';

describe('Day 3 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
            const expected: Program = [
                [2, 4],
                [5, 5],
                [11, 8],
                [8, 5]
            ];

            const result = Parser.parse(input, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
            const expected: Program = [
                [2, 4],
                'dont',
                [5, 5],
                [11, 8],
                'do',
                [8, 5]
            ];

            const result = Parser.parse(input, 2);

            expect(result).toEqual(expected);
        });
    });
});