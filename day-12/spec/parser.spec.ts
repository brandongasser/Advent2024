import * as Parser from '../parser';

const testInput = `AAAA
BBCD
BBCC
EEEC`;

describe('Day 12 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];
            
            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const expected = [
                'AAAA',
                'BBCD',
                'BBCC',
                'EEEC'
            ];
            
            const result = Parser.parse(testInput, 2);

            expect(result).toEqual(expected);
        });
    });
});