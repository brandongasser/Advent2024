import { double, some, string, whitespace } from "../utils/parsers";

export function parse(input: string, part: number): { result: number, nums: number[] }[] {
    const equations: { result: number, nums: number[] }[] = [];

    const equationParser = double.andThen(result => string(': ').preceding(some(double.followedBy(whitespace))).map(nums => ({ result, nums })));

    for (const line of input.split('\n')) {
        equations.push(equationParser.parse(line)!);
    }

    return equations;
}