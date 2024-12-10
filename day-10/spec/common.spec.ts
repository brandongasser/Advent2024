import { parse } from '../parser';
import * as Common from '../common';

const testInput = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

const input = parse(testInput, 1);

describe('Day 10 Common', () => {
    describe('neighbors', () => {
        it('should return neighbors for a position in the middle', () => {
            const expected = [
                [3, 1],
                [4, 2]
            ].sort() as [number, number][];

            const result = Common.neighbors(input, [3, 2]);

            expect(result.sort()).toEqual(expected)
        });

        it('should return neighbors for a position on the edge', () => {
            const expected = [[1, 7]] as [number, number][];

            const result = Common.neighbors(input, [0, 7]);

            expect(result).toEqual(expected);
        });
    });
});