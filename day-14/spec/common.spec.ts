import { Vector } from '../../utils/linear-algebra';
import * as Common from '../common';

fdescribe('Day 14 Parser', () => {
    describe('nextState', () => {
        it('should return the next state for a robot', () => {
            const robot: Common.Robot = {
                position: new Vector(0, 4),
                velocity: new Vector(3, -3)
            };
            const expected: Common.Robot = {
                position: new Vector(3, 1),
                velocity: new Vector(3, -3)
            };

            const result = Common.nextState(robot, 11, 7);

            expect(result).toEqual(expected);
        });

        it('should wrap around positive edges', () => {
            const robot: Common.Robot = {
                position: new Vector(10, 6),
                velocity: new Vector(1, 1)
            };
            const expected: Common.Robot = {
                position: new Vector(0, 0),
                velocity: new Vector(1, 1)
            };

            const result = Common.nextState(robot, 11, 7);

            expect(result).toEqual(expected);
        });

        it('should wrap around negative edges', () => {
            const robot: Common.Robot = {
                position: new Vector(0, 0),
                velocity: new Vector(-1, -1)
            };
            const expected: Common.Robot = {
                position: new Vector(10, 6),
                velocity: new Vector(-1, -1)
            };

            const result = Common.nextState(robot, 11, 7);

            expect(result).toEqual(expected);
        });
    });
});