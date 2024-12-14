import { Vector } from "../utils/linear-algebra";
import { product } from "../utils/utils";
import { Robot } from "./common";

export function part1(input: Robot[], testMode: boolean = false): number {
    const [ width, height ] = testMode ? [ 11, 7 ] : [ 101, 103 ];

    let robots: Robot[] = input;
    for (let i = 0; i < 100; i++) {
        robots = robots.map(robot => nextState(robot, width, height));
    }
    return product(quadrantCounts(robots, width, height));
}

export function nextState(robot: Robot, width: number, height: number): Robot {
    const rawPosition = robot.position.plus(robot.velocity).plus(new Vector<2>(width, height)).getComponents();
    const newPosition: Vector<2> = new Vector(rawPosition[0] % width, rawPosition[1] % height);

    return {
        position: newPosition,
        velocity: robot.velocity
    }
}

export function quadrantCounts(robots: Robot[], width: number, height: number): [ number, number, number, number ] {
    const adjustedPoses = robots.map(robot => robot.position.plus(new Vector<2>(-Math.floor(width / 2), -Math.floor(height / 2))));

    return [
        adjustedPoses.filter(pos => pos.getComponents()[0] < 0 && pos.getComponents()[1] < 0).length,
        adjustedPoses.filter(pos => pos.getComponents()[0] < 0 && pos.getComponents()[1] > 0).length,
        adjustedPoses.filter(pos => pos.getComponents()[0] > 0 && pos.getComponents()[1] < 0).length,
        adjustedPoses.filter(pos => pos.getComponents()[0] > 0 && pos.getComponents()[1] > 0).length
    ]
}