import * as Common from '../common';

describe('Day 6 Common', () => {
    describe('rotateRight', () => {
        it('should rotate from up to right', () => {
            const result = Common.rotateRight('up');

            expect(result).toEqual('right');
        });

        it('should rotate from right to down', () => {
            const result = Common.rotateRight('right');

            expect(result).toEqual('down');
        });

        it('should rotate from down to left', () => {
            const result = Common.rotateRight('down');

            expect(result).toEqual('left');
        });

        it('should rotate left to up', () => {
            const result = Common.rotateRight('left');

            expect(result).toEqual('up');
        });
    });

    describe('move', () => {
        const labMap = [
            [ false, false, false ],
            [ false, true, false ],
            [ false, false, false ]
        ];

        it('should move the guard up', () => {
            const result = Common.move(labMap, { orientation: 'up', position: [ 1, 0 ] });

            expect(result).toEqual({ orientation: 'up', position: [ 0, 0 ]})
        });

        it('should move the guard down', () => {
            const result = Common.move(labMap, { orientation: 'down', position: [ 1, 0 ] });

            expect(result).toEqual({ orientation: 'down', position: [ 2, 0 ] });
        });

        it('should move the guard left', () => {
            const result = Common.move(labMap, { orientation: 'left', position: [ 0, 1 ] });

            expect(result).toEqual({ orientation: 'left', position: [ 0, 0 ] });
        });

        it('should move the guard right', () => {
            const result = Common.move(labMap, { orientation: 'right', position: [ 0, 1 ]});

            expect(result).toEqual({ orientation: 'right', position: [ 0, 2 ]});
        });

        it('should rotate the guard if there is an obstacle in front of her', () => {
            const result = Common.move(labMap, { orientation: 'up', position: [ 2, 1 ]});

            expect(result).toEqual({ orientation: 'right', position: [ 2, 1 ] });
        });

        it('should return done when the guard leaves the lab', () => {
            const result = Common.move(labMap, { orientation: 'up', position: [ 0, 0 ] });

            expect(result).toEqual('done');
        });
    });
});