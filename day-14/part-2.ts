import { nextState, Robot } from "./common";
import { writeFileSync } from 'fs';

export function part2(input: Robot[]): number {
    let robots: Robot[] = input;
    const maxIteration = 7000;
    for (let i = 0; i <= maxIteration; i++) {
        if (i === 6870) {
            drawRobots(robots, 6870);
        }
        robots = robots.map(robot => nextState(robot, 101, 103));
    }
    return 6870;
}

export function drawRobots(robots: Robot[], iteration: number) {
    const canvas: Set<string> = new Set();
    
    robots.forEach(robot => canvas.add(JSON.stringify(robot.position.getComponents())));

    let result: string = '';
    for (let y = 0; y < 103; y++) {
        let line: string = '';
        for (let x = 0; x < 101; x++) {
            line += canvas.has(JSON.stringify([x, y])) ? '#' : ' ';
        }
        result += line + '\n';
    }
    writeFileSync(`./day-14/states/${iteration}.txt`, result);
}