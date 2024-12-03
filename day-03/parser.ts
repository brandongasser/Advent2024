import { Instruction, Program } from "./common";

export function parse(input: string, part: number): Program {
    const matches = input.matchAll(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);

    const result: Program = [];

    let current = matches.next();
    while (!current.done) {
        const parts = current.value[0].split(',');
        const instruction: Instruction = [ +parts[0].slice(4), +parts[1].slice(0, parts[1].length - 1) ];

        result.push(instruction);

        current = matches.next();
    }

    return result;
}