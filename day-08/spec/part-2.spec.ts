import { Antenna, AntennaMap } from '../common';
import * as Part2 from '../part-2';

const testInput: AntennaMap = {
    height: 12,
    width: 12,
    antennas: [
        { frequency: '0', position: [ 1, 8 ] },
        { frequency: '0', position: [ 2, 5 ] },
        { frequency: '0', position: [ 3, 7 ] },
        { frequency: '0', position: [ 4, 4 ] },
        { frequency: 'A', position: [ 5, 6 ] },
        { frequency: 'A', position: [ 8, 8 ] },
        { frequency: 'A', position: [ 9, 9 ] }
    ]
};

describe('Day 8 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer', () => {
            const result = Part2.part2(testInput);

            expect(result).toEqual(34);
        });
    });

    describe('findAntinodes', () => {
        it('should return and empty set for an empty list', () => {
            const result = Part2.findAntinodes([], 10, 10);

            expect(result).toEqual(new Set());
        });

        it('should return an empty set for a list of length 1', () => {
            const result = Part2.findAntinodes([ { frequency: '0', position: [ 1, 8 ] } ], 10, 10);

            expect(result).toEqual(new Set());
        });

        it('should return antinodes for a frequency', () => {
            const antennas: Antenna[] = [
                { frequency: 'T', position: [ 0, 0 ] },
                { frequency: 'T', position: [ 1, 3 ] },
                { frequency: 'T', position: [ 2, 1 ] }
            ];
            const expected: Set<string> = new Set([
                `${[ 0, 0 ]}`,
                `${[ 0, 5 ]}`,
                `${[ 1, 3 ]}`,
                `${[ 2, 1 ]}`,
                `${[ 2, 6 ]}`,
                `${[ 3, 9 ]}`,
                `${[ 4, 2 ]}`,
                `${[ 6, 3 ]}`,
                `${[ 8, 4 ]}`
            ]);

            const result = Part2.findAntinodes(antennas, 10, 10);

            expect(result).toEqual(expected);
        });
    });
});