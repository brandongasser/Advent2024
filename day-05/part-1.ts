import { makeComparator } from "./common";

export function part1(input: { orderings: any, lists: number[][] }): number {
    const comparator = makeComparator(input.orderings);

    const sortedLists = input.lists.map(list => [...list].sort(comparator));
    
    let answer = 0;
    for (let i = 0; i < input.lists.length; i++) {
        if (JSON.stringify(sortedLists[i]) === JSON.stringify(input.lists[i])) {
            answer += sortedLists[i][(sortedLists[i].length - 1) / 2];
        }
    }

    return answer;
}