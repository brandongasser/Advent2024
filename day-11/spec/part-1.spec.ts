import * as Part1 from '../part-1';

describe('Day 11 Part 1', () => {
    describe('part1', () => {
        it('should return the correct answer', () => {
            const input = [ 125, 17 ];

            const result = Part1.part1(input);

            expect(result).toEqual(55312);
        });
    });

    describe('blink', () => {
        it('should change the state of all rocks', () => {
            const rocks = [ 253, 0, 2024, 14168 ];
            const expected = [ 512072, 1, 20, 24, 28676032 ];

            const result = Part1.blink(rocks);

            expect(result).toEqual(expected);
        });
    });
});