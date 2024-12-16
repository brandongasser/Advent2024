import { Tile, Move } from '../common';
import * as Parser from '../parser';

const testInput = `#####
#...#
#O@.#
##.O#
#####

<^^>>>vv`;

describe('Day 15 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected: { map: Tile[][], moves: Move[], robotPosition: [ number, number ] } = {
                map: [
                    [ '#', '#', '#', '#', '#' ],
                    [ '#', '.', '.', '.', '#' ],
                    [ '#', 'O', '.', '.', '#' ],
                    [ '#', '#', '.', 'O', '#' ],
                    [ '#', '#', '#', '#', '#' ]
                ],
                moves: [ '<', '^', '^', '>', '>', '>', 'v', 'v' ],
                robotPosition: [ 2, 2 ]
            };

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });

    describe('parseMap', () => {
        it('should parse the map part of the input', () => {
            const input = '#####\n#...#\n#O@.#\n##.O#\n#####';
            const expected: { map: Tile[][], robotPosition: [ number, number ] } = {
                map: [
                    [ '#', '#', '#', '#', '#' ],
                    [ '#', '.', '.', '.', '#' ],
                    [ '#', 'O', '.', '.', '#' ],
                    [ '#', '#', '.', 'O', '#' ],
                    [ '#', '#', '#', '#', '#' ]
                ],
                robotPosition: [ 2, 2 ]
            };

            const result = Parser.parseMap(input);

            expect(result).toEqual(expected);
        });
    });

    describe('parseMoves', () => {
        it('should parse the moves part of the input', () => {
            const input = '<^^>>\n>vv';
            const expected: Move[] = [ '<', '^', '^', '>', '>', '>', 'v', 'v' ];

            const result = Parser.parseMoves(input);

            expect(result).toEqual(expected);
        });
    });
});