import { Antenna, groupByFrequency } from "./common";

export function part2(input: { height: number, width: number, antennas: Antenna[] }): number {
    const groups = groupByFrequency(input.antennas);

    let allAntinodes: Set<string> = new Set();
    for (const group of groups) {
        allAntinodes = new Set([ ...findAntinodes(group, input.width, input.height), ...allAntinodes ]);
    }

    return [...allAntinodes].filter(antinode => {
        const [ y, x ] = antinode.split(',').map(n => +n);
        return y >= 0 && y < input.height && x >= 0 && x < input.width
    }).length;
}

export function findAntinodes(antennas: Antenna[], gridWidth: number, gridHeight: number): Set<string> {
    if (antennas.length < 2) {
        return new Set();
    }

    const antinodes = findAntinodes(antennas.slice(1), gridWidth, gridHeight);

    for (let i = 1; i < antennas.length; i++) {
        const vector: [ number, number ] = [ antennas[i].position[0] - antennas[0].position[0], antennas[i].position[1] - antennas[0].position[1] ];

        let [ y, x ] = antennas[i].position;
        while (y >= 0 && y < gridHeight && x >= 0 && x < gridWidth) {
            antinodes.add(`${[ y, x ]}`);
            y += vector[0];
            x += vector[1]
        }
        [ y, x ] = antennas[i].position;
        while (y >= 0 && y < gridHeight && x >= 0 && x < gridWidth) {
            antinodes.add(`${[ y, x ]}`);
            y -= vector[0];
            x -= vector[1]
        }
    }

    return antinodes;
}