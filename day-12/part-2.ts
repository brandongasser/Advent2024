import { distinct, sum } from "../utils/utils";

export type Edge = 'top' | 'bottom' | 'left' | 'right';

export function part2(input: string[]): number {
    const searched: Set<string> = new Set();
    const regions: { pos: [ number, number ], edges: Edge[] }[][] = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (searched.has(JSON.stringify([ i, j ]))) {
                continue;
            }
            const region = getRegion(input, [ i, j ]);
            regions.push(region.map(pos => ({ pos, edges: getEdges(input, pos) })));
            region.forEach(pos => searched.add(JSON.stringify(pos)));
        }
    }

    const regionStats = regions.map(region => ({ area: region.length, edges: countEdges(region) }));

    return sum(regionStats.map(stats => stats.area * stats.edges));
}

export function getEdges(map: string[], pos: [ number, number ]): Edge[] {
    const candidates = [
        [ pos[0] + 1, pos[1] ],
        [ pos[0] - 1, pos[1] ],
        [ pos[0], pos[1] + 1 ],
        [ pos[0], pos[1] - 1 ]
    ].filter(pos => pos[0] >= 0 && pos[0] < map.length && pos[1] >= 0 && pos[1] < map[0].length) as [ number, number ][];

    const edges: Edge[] = [];
    for (const candidate of candidates) {
        if (map[pos[0]][pos[1]] === map[candidate[0]][candidate[1]]) {
            continue;
        }
        edges.push([
            { condition: (c: any) => c[0] < pos[0], edge: 'top' },
            { condition: (c: any) => c[0] > pos[0], edge: 'bottom' },
            { condition: (c: any) => c[1] < pos[1], edge: 'left' },
            { condition: (c: any) => c[1] > pos[1], edge: 'right' }
        ].find(test => test.condition(candidate))!.edge as Edge);
    }
    if (pos[0] === 0) {
        edges.push('top');
    }
    if (pos[0] === map.length - 1) {
        edges.push('bottom');
    }
    if (pos[1] === 0) {
        edges.push('left');
    }
    if (pos[1] === map[0].length - 1) {
        edges.push('right');
    }
    return edges;
}

export function countEdges(region: { pos: [ number, number ], edges: Edge[] }[]): number {
    function groupByIndex(poses: [ number, number ][], index: number): [ number, number ][][] {
        const groups: { [x: number]: [ number, number ][] } = {};

        poses.forEach(pos => {
            if (!groups[pos[index]]) {
                groups[pos[index]] = [];
            }
            groups[pos[index]].push(pos);
        });

        const result: [ number, number ][][] = [];
        Object.keys(groups).forEach((key: string) => {
            result.push(groups[+key]);
        });
        return result;
    }

    function countVerticalEdges(poses: [ number, number ][]): number {
        const groups = groupByIndex(poses, 1);

        let result = 0;
        groups.forEach(group => {
            group.sort((a, b) => a[0] - b[0]);
            let groupCount = 1
            for (let i = 0; i < group.length - 1; i++) {
                if (group[i][0] + 1 !== group[i + 1][0]) {
                    groupCount++;
                }
            }
            result += groupCount;
        });
        return result;
    }

    function countHorizontalEdges(poses: [ number, number ][]): number {
        const groups = groupByIndex(poses, 0);

        let result = 0;
        groups.forEach(group => {
            group.sort((a, b) => a[1] - b[1]);
            let groupCount = 1;
            for (let i = 0; i < group.length - 1; i++) {
                if (group[i][1] + 1 !== group[i + 1][1]) {
                    groupCount++;
                }
            }
            result += groupCount;
        });
        return result;
    }

    const tops = region.filter(tile => tile.edges.includes('top')).map(tile => tile.pos);
    const bottoms = region.filter(tile => tile.edges.includes('bottom')).map(tile => tile.pos);
    const lefts = region.filter(tile => tile.edges.includes('left')).map(tile => tile.pos);
    const rights = region.filter(tile => tile.edges.includes('right')).map(tile => tile.pos);

    return countVerticalEdges(lefts) + countVerticalEdges(rights) + countHorizontalEdges(tops) + countHorizontalEdges(bottoms);
}

export function getRegion(map: string[], start: [ number, number ]): [ number, number ][] {
    function neighbors(pos: [ number, number ]): [ number, number ][] {
        const candidates = [
            [ pos[0] + 1, pos[1] ],
            [ pos[0] - 1, pos[1] ],
            [ pos[0], pos[1] + 1 ],
            [ pos[0], pos[1] - 1 ]
        ].filter(p => p[0] >= 0 && p[0] < map.length && p[1] >= 0 && p[1] < map[0].length) as [ number, number ][];

        return candidates.filter(p => map[p[0]][p[1]] === map[pos[0]][pos[1]]);
    }

    const searched: Set<string> = new Set();

    function search(current: [ number, number ][]): [ number, number ][] {
        if (current.length === 0) {
            return [];
        }

        const nextCandidates = current.flatMap(neighbors);

        const next: [ number, number ][] = distinct(nextCandidates.map(pos => JSON.stringify(pos))).filter(pos => !searched.has(pos)).map(pos => JSON.parse(pos));

        next.forEach(pos => searched.add(JSON.stringify(pos)));

        const subResult = search(next);

        return [ ...current, ...subResult ];
    }

    searched.add(JSON.stringify(start));
    return search([ start ]);
}