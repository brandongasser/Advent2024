import { Vector } from '../../utils/linear-algebra';
import { ClawMachine } from '../common';
import * as Parser from '../parser';

const testInput = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`;

describe('Day 13 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected: ClawMachine[] = [
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
            
            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });

    describe('buttonParser', () => {
        it('should parse the A button', () => {
            const result = Parser.buttonParser.parse('Button A: X+94, Y+34');
            
            expect(result).toEqual(new Vector(94, 34));
        });

        it('should parse the B button', () => {
            const result = Parser.buttonParser.parse('Button B: X+22, Y+67');

            expect(result).toEqual(new Vector(22, 67));
        });
    });

    describe('prizeParser', () => {
        it('should parse the prize', () => {
            const result = Parser.prizeParser.parse('Prize: X=8400, Y=5400');

            expect(result).toEqual(new Vector(8400, 5400));
        });
    });

    describe('clawMachineParser', () => {
        it('should parse the claw machine', () => {
            const expected: ClawMachine = {
                a: new Vector(94, 34),
                b: new Vector(22, 67),
                prize: new Vector(8400, 5400)
            };

            const result = Parser.clawMachineParser.parse('Button A: X+94, Y+34\nButton B: X+22, Y+67\nPrize: X=8400, Y=5400');

            expect(result).toEqual(expected);
        });
    });
});