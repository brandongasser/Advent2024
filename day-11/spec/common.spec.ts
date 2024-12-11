import * as Common from '../common';

describe('Day 11 Common', () => {
    describe('changeState', () => {
        it('should change a 0 to a 1', () => {
            const result = Common.changeState(0);

            expect(result).toEqual([1]);
        });

        it('should split a number with an even number of digits', () => {
            const result = Common.changeState(2024);

            expect(result).toEqual([20, 24]);
        });

        it('should multiply anything that does not match the first two cases by 2024', () => {
            const result = Common.changeState(253);

            expect(result).toEqual([512072]);
        });
    });

    describe('blink', () => {
        it('should return the number of rocks a rock creates after the specified number of blinks', () => {
            const result = Common.blink(6, 125);

            expect(result).toEqual(7);
        });
    });
});