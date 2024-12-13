import { Vector } from "../utils/linear-algebra";
import { endOfLine, int, Parser, some, string } from "../utils/parsers";
import { Button, ClawMachine } from "./common";

export function parse(input: string, part: number): ClawMachine[] {
    return some(clawMachineParser.followedBy(endOfLine)).parse(input)!;
}

export const buttonParser: Parser<Button> = string('Button A: ').or(string('Button B: ')).preceding(
    string('X+').preceding(int).followedBy(string(', ')).andThen(x => string('Y+').preceding(int).map(y => new Vector<2>(x, y)))
);

export const prizeParser: Parser<Vector<2>> = string('Prize: X=').preceding(int).followedBy(string(', Y=')).andThen(x => int.map(y => new Vector<2>(x, y)));

export const clawMachineParser: Parser<ClawMachine> = buttonParser.followedBy(endOfLine).andThen(
        a => buttonParser.followedBy(endOfLine).andThen(
        b => prizeParser.followedBy(endOfLine).map(
        prize => ({ a, b, prize }))));