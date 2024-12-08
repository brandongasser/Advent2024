import { Antenna, AntennaMap } from '../common';
import * as Part1 from '../part-1';

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

describe('Day 8 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const result = Part1.part1(testInput);

            expect(result).toEqual(14);
        });
    });

    describe('findAntinodes', () => {
        it('should return an empty set for an empty list', () => {
            const result = Part1.findAntinodes([]);

            expect(result).toEqual(new Set())
        });

        it('should return an empty set for a list of length 1', () => {
            const result = Part1.findAntinodes([ { frequency: '0', position: [ 1, 8 ] } ]);

            expect(result).toEqual(new Set());
        });

        it('should return antinodes for a frequency', () => {
            const group: Antenna[] = [
                { frequency: 'a', position: [ 3, 4 ] },
                { frequency: 'a', position: [ 4, 8 ] },
                { frequency: 'a', position: [ 5, 5 ] }
            ];
            const expected: Set<string> = new Set([
                `${[ 1, 3 ]}`,
                `${[ 2, 0 ]}`,
                `${[ 6, 2 ]}`,
                `${[ 7, 6 ]}`,
                `${[ 3, 11 ]}`,
                `${[ 5, 12 ]}`,
            ]);

            const result = Part1.findAntinodes(group);

            expect(result).toEqual(expected);
        });
    });
});