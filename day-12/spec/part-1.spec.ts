import { parse } from '../parser';
import * as Part1 from '../part-1';

describe('Day 12 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer for example 1', () => {
            const testInput = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];

            const result = Part1.part1(testInput);

            expect(result).toEqual(140);
        });

        it('should return the correct answer for example 2', () => {
            const testInput = [
                'OOOOO',
                'OXOXO',
                'OOOOO',
                'OXOXO',
                'OOOOO'
            ];

            const result = Part1.part1(testInput);

            expect(result).toEqual(772);
        });

        it('should return the correct answer for example 3', () => {
            const testInput = parse(`RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`, 1);

            const result = Part1.part1(testInput);

            expect(result).toEqual(1930);
        });
    });

    describe('findRegionInfo', () => {
        it('should return the info for a region', () => {
            const map = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];
            const expected = {
                area: 4,
                perimeter: 10,
                tiles: [[1, 2], [2, 2], [2, 3], [3, 3]] as [number, number][]
            }

            const result = Part1.findRegionInfo(map, [2, 2]);

            expect(result.area).toEqual(expected.area);
            expect(result.perimeter).toEqual(expected.perimeter);
            expect(result.tiles.sort()).toEqual(expected.tiles.sort());
        });
    });
});