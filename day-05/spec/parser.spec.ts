import * as Parser from '../parser';

const testInput = `47|53
97|13
97|61

75,47,61,53,29
97,61,53,29,13`;

describe('Day 5 Parser', () => {
    describe('parse', () => {
        it('should parse input for part 1', () => {
            const expected = {
                orderings: {
                    '[47,53]': -1,
                    '[53,47]': 1,
                    '[97,13]': -1,
                    '[13,97]': 1,
                    '[97,61]': -1,
                    '[61,97]': 1
                },
                lists: [
                    [ 75, 47, 61, 53, 29 ],
                    [ 97, 61, 53, 29, 13 ]
                ]
            };

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });

        it('should parse input for part 2', () => {
            const expected = {
                orderings: {
                    '[47,53]': -1,
                    '[53,47]': 1,
                    '[97,13]': -1,
                    '[13,97]': 1,
                    '[97,61]': -1,
                    '[61,97]': 1
                },
                lists: [
                    [ 75, 47, 61, 53, 29 ],
                    [ 97, 61, 53, 29, 13 ]
                ]
            };

            const result = Parser.parse(testInput, 1);

            expect(result).toEqual(expected);
        });
    });

    describe('parseOrderings', () => {
        it('should parse orderings', () => {
            const input = '47|53\n97|13\n97|61';
            const expected = {
                '[47,53]': -1,
                '[53,47]': 1,
                '[97,13]': -1,
                '[13,97]': 1,
                '[97,61]': -1,
                '[61,97]': 1
            };

            const result = Parser.parseOrderings(input);

            expect(result).toEqual(expected);
        });
    });

    describe('parseLists', () => {
        it('should parse lists', () => {
            const input = '75,47,61,53,29\n97,61,53,29,13';
            const expected = [
                [ 75, 47, 61, 53, 29 ],
                [ 97, 61, 53, 29, 13 ]
            ];

            const result = Parser.parseLists(input);

            expect(result).toEqual(expected);
        });
    });
});