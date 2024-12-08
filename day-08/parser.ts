import { Antenna, AntennaMap } from "./common";

export function parse(input: string, part: number): AntennaMap {
    const rows = input.split('\n');

    const antennas: Antenna[] = [];
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            if (rows[i][j] !== '.') {
                antennas.push({ frequency: rows[i][j], position: [ i, j ] });
            }
        }
    }

    return {
        height: rows.length,
        width: rows[0].length,
        antennas
    }
}