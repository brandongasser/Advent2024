import { parse } from '../parser';
import * as Part2 from '../part-2';

describe('Day 12 Part 2', () => {
    describe('part2', () => {
        it('should return the correct answer for example 1', () => {
            const testInput = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];

            const result = Part2.part2(testInput);

            expect(result).toEqual(80);
        });

        it('should return the correct answer for example 2', () => {
            const testInput = [
                'EEEEE',
                'EXXXX',
                'EEEEE',
                'EXXXX',
                'EEEEE'
            ];

            const result = Part2.part2(testInput);

            expect(result).toEqual(236);
        });

        it('should return the correct answer for example 3', () => {
            const testInput = parse(`AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`, 2);
            
            const result = Part2.part2(testInput);

            expect(result).toEqual(368);
        });
    });

    describe('getEdges', () => {
        it('should return the edges of a tile', () => {
            const map = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];
            const expected: Part2.Edge[] = [
                'left',
                'bottom'
            ];

            const result = Part2.getEdges(map, [ 2, 2 ]);

            expect(result.sort()).toEqual(expected.sort())
        });
    });

    describe('countEdges', () => {
        it('should count the edges of a region', () => {
            const map = [
                'EEEEE',
                'EXXXX',
                'EEEEE',
                'EXXXX',
                'EEEEE'
            ];
            const region = Part2.getRegion(map, [ 0, 0 ]).map(pos => ({ pos, edges: Part2.getEdges(map, pos) }));
            
            const result = Part2.countEdges(region);

            expect(result).toEqual(12);
        });
    });

    describe('getRegion', () => {
        it('should return the tiles in a region', () => {
            const map = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];
            const expected: [ number, number ][] = [
                [ 1, 2 ],
                [ 2, 2 ],
                [ 2, 3 ],
                [ 3, 3 ]
            ];

            const result = Part2.getRegion(map, [ 2, 2 ]);

            expect(result.sort()).toEqual(expected.sort());
        });
    });
});