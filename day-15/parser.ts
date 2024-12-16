import { Move, Tile } from "./common";

export function parse(input: string, part: number): { map: Tile[][], moves: Move[], robotPosition: [ number, number ] } {
    const [ mapPart, movesPart ] = input.split('\n\n');

    return {
        ...parseMap(mapPart),
        moves: parseMoves(movesPart)
    };
}

export function parseMap(mapPart: string): { map: Tile[][], robotPosition: [ number, number ] } {
    const rows = mapPart.split('\n');

    let robotPosition: [ number, number ] = [ 0, 0 ];
    const map: Tile[][] = [];
    for (let i = 0; i < rows.length; i++) {
        const currentRow: Tile[] = [];
        for (let j = 0; j < rows[i].length; j++) {
            if (rows[i][j] === '@') {
                robotPosition = [ i, j ];
            }
            currentRow.push(rows[i][j] === '@' ? '.' : rows[i][j] as Tile);
        }
        map.push(currentRow);
    }

    return { map, robotPosition };
}

export function parseMoves(movesPart: string): Move[] {
    const rows = movesPart.split('\n');

    const moves: Move[] = [];
    for (const row of rows) {
        for (let i = 0; i < row.length; i++) {
            moves.push(row[i] as Move);
        }
    }
    return moves;
}