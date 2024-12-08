import * as Common from '../common';

describe('Day 8 Common', () => {
    describe('groupByFrequency', () => {
        it('should group antennas by frequency', () => {
            const antennas: Common.Antenna[] = [
                { frequency: '0', position: [ 1, 8 ] },
                { frequency: '0', position: [ 2, 5 ] },
                { frequency: '0', position: [ 3, 7 ] },
                { frequency: '0', position: [ 4, 4 ] },
                { frequency: 'A', position: [ 5, 6 ] },
                { frequency: 'A', position: [ 8, 8 ] },
                { frequency: 'A', position: [ 9, 9 ] }
            ];
            const expected: Common.Antenna[][] = [
                [
                    { frequency: '0', position: [ 1, 8 ] },
                    { frequency: '0', position: [ 2, 5 ] },
                    { frequency: '0', position: [ 3, 7 ] },
                    { frequency: '0', position: [ 4, 4 ] }
                ],
                [
                    { frequency: 'A', position: [ 5, 6 ] },
                    { frequency: 'A', position: [ 8, 8 ] },
                    { frequency: 'A', position: [ 9, 9 ] }
                ]
            ];

            const result = Common.groupByFrequency(antennas);

            expect(result).toEqual(expected);
        });
    });
});