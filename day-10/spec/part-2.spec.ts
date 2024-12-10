import { parse } from '../parser';
import * as Part2 from '../part-2';

const testInput = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

const input = parse(testInput, 2);

describe('Day 10 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(input);

            expect(result).toEqual(81);
        });
    });

    describe('rating', () => {
        it('should return the rating of a trailhead', () => {
            const result = Part2.rating(input, [ 0, 2 ]);
            
            expect(result).toEqual(20);
        });
    });
});