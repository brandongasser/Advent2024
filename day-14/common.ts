import { Vector } from "../utils/linear-algebra"

export type Robot = {
    position: Vector<2>,
    velocity: Vector<2>
};

export function nextState(robot: Robot, width: number, height: number): Robot {
    const rawPosition = robot.position.plus(robot.velocity).plus(new Vector<2>(width, height)).getComponents();
    const newPosition: Vector<2> = new Vector(rawPosition[0] % width, rawPosition[1] % height);

    return {
        position: newPosition,
        velocity: robot.velocity
    }
}