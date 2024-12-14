import { Vector } from '../../utils/linear-algebra';
import { Robot } from '../common';
import { parse } from '../parser';
import * as Part1 from '../part-1';

const testInput = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;

describe('Day 14 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const input = parse(testInput, 1);

            const result = Part1.part1(input, true);

            expect(result).toEqual(12);
        });
    });

    describe('quadrantCounts', () => {
        it('should count the robots in each quadrant', () => {
            const robots: Robot[] = [
                {
                    position: new Vector(5, 3),
                    velocity: new Vector(1, 1)
                },
                {
                    position: new Vector(6, 4),
                    velocity: new Vector(1, 1)
                },
                {
                    position: new Vector(7, 4),
                    velocity: new Vector(1, 1)
                },
                {
                    position: new Vector(4, 5),
                    velocity: new Vector(1, 1)
                }
            ];
            const expected: [number, number, number, number] = [0, 0, 1, 2];

            const result = Part1.quadrantCounts(robots, 11, 7);

            expect(result.sort()).toEqual(expected);
        });
    });
});