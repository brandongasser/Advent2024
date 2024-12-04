import { Instruction, Program } from "./common";

export function parse(input: string, part: number): Program {
    const matches = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/g)!;

    return matches.map(match => {
        if (match === 'do()') {
            return 'do';
        } else if (match === 'don\'t()') {
            return 'dont';
        }
        return match.match(/[0-9]+/g)!.map(m => +m);
    }) as Program;
}