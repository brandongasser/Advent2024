import { Vector } from "../utils/linear-algebra";
import { character, endOfLine, int, Parser, some, string, whitespace } from "../utils/parsers";
import { Robot } from "./common";

export function parse(input: string, part: number): Robot[] {
    const parser = some(robotParser.followedBy(endOfLine));

    return parser.parse(input)!;
}

export const vector2Parser: Parser<Vector<2>> = int.andThen(x => character(',').preceding(int).map(y => new Vector(x, y)));

export const robotParser: Parser<Robot> = string('p=').preceding(vector2Parser).andThen(position => string(' v=').preceding(vector2Parser).map(velocity => ({ position, velocity })));