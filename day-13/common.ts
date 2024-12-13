import { Vector } from "../utils/linear-algebra";

export type Button = Vector<2>

export type ClawMachine = {
    a: Button,
    b: Button,
    prize: Vector<2>
}