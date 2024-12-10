import { parse } from '../parser';
import * as Part1 from '../part-1';

const testInput = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

const input = parse(testInput, 1);

describe('Day 10 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(input);

            expect(result).toEqual(36);
        });
    });

    describe('score', () => {
        it('should return the score of a trailhead', () => {
            const result = Part1.score(input, [ 0, 2 ]);

            expect(result).toEqual(5);
        });
    });
});