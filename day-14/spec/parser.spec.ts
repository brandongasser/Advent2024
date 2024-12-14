import { Vector } from '../../utils/linear-algebra';
import { Robot } from '../common';
import * as Parser from '../parser';

const testInput = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2`

describe('Day 14 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected: Robot[] = [
                {
                    position: new Vector(0, 4),
                    velocity: new Vector(3, -3)
                },
                {
                    position: new Vector(6, 3),
                    velocity: new Vector(-1, -3)
                },
                {
                    position: new Vector(10, 3),
                    velocity: new Vector(-1, 2)
                }
            ];

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });

    describe('vector2Parser', () => {
        it('should parse a 2 dimensional vector', () => {
            const result = Parser.vector2Parser.parse('2,-1');

            expect(result).toEqual(new Vector<2>(2, -1));
        });
    });

    describe('robotParser', () => {
        it('should parse a robot', () => {
            const expected: Robot = {
                position: new Vector(0, 4),
                velocity: new Vector(3, -3)
            };

            const result = Parser.robotParser.parse('p=0,4 v=3,-3');

            expect(result).toEqual(expected);
        });
    });
});