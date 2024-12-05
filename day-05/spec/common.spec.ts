import * as Common from '../common';

describe('Day 5 Common', () => {
    describe('makeComparator', () => {
        it('should create a comparator', () => {
            const orderings = { '[1,2]': -1, '[2,1]': 1 };

            const result = Common.makeComparator(orderings);

            expect(result(1, 2)).toEqual(-1);
            expect(result(2, 1)).toEqual(1);
            expect(result(3, 3)).toEqual(0);
        });
    });
});