import { Antenna, AntennaMap, groupByFrequency } from "./common";

export function part1(input: AntennaMap): number {
    const groups = groupByFrequency(input.antennas);

    let allAntinodes: Set<string> = new Set();
    for (const group of groups) {
        allAntinodes = new Set([ ...findAntinodes(group), ...allAntinodes ]);
    }

    return [...allAntinodes].filter(antinode => {
        const [ y, x ] = antinode.split(',').map(n => +n);
        return y >= 0 && y < input.height && x >= 0 && x < input.width
    }).length;
}

export function findAntinodes(antennas: Antenna[]): Set<string> {
    if (antennas.length < 2) {
        return new Set();
    }

    const antinodes = findAntinodes(antennas.slice(1));

    for (let i = 1; i < antennas.length; i++) {
        const vector: [ number, number ] = [ antennas[i].position[0] - antennas[0].position[0], antennas[i].position[1] - antennas[0].position[1] ];

        antinodes.add(`${[ antennas[0].position[0] + 2 * vector[0], antennas[0].position[1] + 2 * vector[1] ]}`);
        antinodes.add(`${[ antennas[0].position[0] - vector[0], antennas[0].position[1] - vector[1] ]}`);
        if (vector[0] % 3 === 0 && vector[1] % 3 === 0) {
            antinodes.add(`${[ antennas[0].position[0] + vector[0] / 3, antennas[0].position[1] + vector[1] / 3 ]}`);
            antinodes.add(`${[ antennas[0].position[0] + 2 * vector[0] / 3, antennas[0].position[1] + 2 * vector[1] / 3 ]}`);
        }
    }

    return antinodes;
}