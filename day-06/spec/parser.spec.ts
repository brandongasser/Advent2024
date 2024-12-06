import { GuardState, LabMap } from '../common';
import * as Parser from '../parser';

describe('Day 6 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const testInput = `.#..\n....\n#...\n..^#`;
            const expected: { labMap: LabMap, guardState: GuardState } = {
                labMap: [
                    [ false, true, false, false ],
                    [ false, false, false, false ],
                    [ true, false, false, false ],
                    [ false, false, false, true ]
                ],
                guardState: {
                    orientation: 'up',
                    position: [ 3, 2 ]
                }
            };

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });
});