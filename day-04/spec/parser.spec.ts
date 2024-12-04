import * as Parser from '../parser';
import { Crossword } from '../part-1';

describe('Day 4 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const testInput = `ABC\nDEF\nGHI`;
            const expected: Crossword = {
                rows: ['ABC', 'DEF', 'GHI'],
                cols: ['ADG', 'BEH', 'CFI'],
                diagonals: ['A',  'BD',  'CEG', 'FH', 'I',   'G', 'HD', 'IEA', 'FB', 'C']
            };

            const result = Parser.parse(testInput, 1);

            expect(result.rows.sort()).toEqual(expected.rows.sort());
            expect(result.cols.sort()).toEqual(expected.cols.sort());
            expect(result.diagonals.sort()).toEqual(expected.diagonals.sort());
        });

        it('should parse input for part 2', () => {
            const testInput = `ABCD\nEFGH\nIJKL\nMNOP`;
            const expected = [
                ['ABC', 'EFG', 'IJK'],
                ['BCD', 'FGH', 'JKL'],
                ['EFG', 'IJK', 'MNO'],
                ['FGH', 'JKL', 'NOP']
            ];

            const result = Parser.parse(testInput, 2);

            expect(result).toEqual(expected);
        });
    });

    describe('getDownLeftDiagonals', () => {
        it('should get the down left diagonals from a list of rows', () => {
            const rows = ['ABC', 'DEF', 'GHI'];
            const expected = ['A', 'BD', 'CEG', 'FH', 'I'];
    
            const result = Parser.getDownLeftDiagonals(rows);
    
            expect(result.sort()).toEqual(expected.sort());
        });
    });
});