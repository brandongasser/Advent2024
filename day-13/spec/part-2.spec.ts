import { Vector } from '../../utils/linear-algebra';
import { ClawMachine } from '../common';
import * as Part2 from '../part-2';

const testInput: ClawMachine[] = [
    {
        a: new Vector(94, 34),
        b: new Vector(22, 67),
        prize: new Vector(8400, 5400)
    },
    {
        a: new Vector(26, 66),
        b: new Vector(67, 21),
        prize: new Vector(12748, 12176)
    },
    {
        a: new Vector(17, 86),
        b: new Vector(84, 37),
        prize: new Vector(7870, 6450)
    },
    {
        a: new Vector(69, 23),
        b: new Vector(27, 71),
        prize: new Vector(18641, 10279)
    }
];

describe('Day 13 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(testInput);

            expect(result).toEqual(875318608908);
        });
    });
});