import { Vector } from "../../utils/linear-algebra";
import * as Common from '../common';

describe('Day 13 Common', () => {
    describe('winCost', () => {
        it('should calculate the win cost for a possible claw machine', () => {
            const clawMachine: Common.ClawMachine = {
                a: new Vector(94, 34),
                b: new Vector(22, 67),
                prize: new Vector(8400, 5400)
            };

            const result = Common.winCost(clawMachine);

            expect(result).toEqual(280);
        });

        it('should return null for an impossible claw machine', () => {
            const clawMachine: Common.ClawMachine = {
                a: new Vector(26, 66),
                b: new Vector(67, 21),
                prize: new Vector(12748, 12176)
            };

            const result = Common.winCost(clawMachine);

            expect(result).toBeNull();
        });
    });
});