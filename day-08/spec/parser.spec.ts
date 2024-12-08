import { AntennaMap } from '../common';
import * as Parser from '../parser';

const testInput = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

describe('Day 8 Parser', () => {
    describe('parse', () => {
        it('should parse the input for part 1', () => {
            const expected: AntennaMap = {
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

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse the input for part 1', () => {
            const expected: AntennaMap = {
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

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });
});