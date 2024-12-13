import { Matrix, Vector } from "../utils/linear-algebra";

export type Button = Vector<2>

export type ClawMachine = {
    a: Button,
    b: Button,
    prize: Vector<2>
}

export function winCost(clawMachine: ClawMachine): number | null {
    const matrix: Matrix<2, 2> = new Matrix(
        new Vector(clawMachine.a.getComponents()[0], clawMachine.b.getComponents()[0]),
        new Vector(clawMachine.a.getComponents()[1], clawMachine.b.getComponents()[1])
    );

    const inverse: Matrix<2, 2> = new Matrix<2, 2>(
        new Vector(clawMachine.b.getComponents()[1], -clawMachine.b.getComponents()[0]),
        new Vector(-clawMachine.a.getComponents()[1], clawMachine.a.getComponents()[0])
    );

    const result = inverse.times(clawMachine.prize.asColumnMatrix()).getColumns()[0];

    if (result.getComponents()[0] % matrix.determinant()! !== 0 || result.getComponents()[1] % matrix.determinant()! !== 0) {
        return null;
    }

    return 3 * Math.round(result.getComponents()[0] / matrix.determinant()!) + Math.round(result.getComponents()[1] / matrix.determinant()!);
}