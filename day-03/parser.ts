import { Instruction, Program } from "./common";

export function parse(input: string, part: number): Program {
    if (part === 1) {
        return part1(input);
    } else {
        return part2(input);
    }
}

function part1(input: string): Program {
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

function part2(input: string): Program {
    const matches = input.matchAll(/(mul\([0-9]{1,3},[0-9]{1,3}\))|(do\(\))|(don't\(\))/g);

    const result: Program = [];
    let current = matches.next();
    while(!current.done) {
        if (current.value[0] === 'do()') {
            result.push('do');
        } else if (current.value[0] === 'don\'t()') {
            result.push('dont');
        } else {
            const parts = current.value[0].split(',');
            const instruction: Instruction = [ +parts[0].slice(4), +parts[1].slice(0, parts[1].length - 1) ];

            result.push(instruction);
        }

        current = matches.next();
    }

    return result;
}