import { distinct, sum } from "../utils/utils";

export function part1(input: string[]): number {
    const searched: Set<string> = new Set();
    let answer = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (searched.has(JSON.stringify([ i, j ]))) {
                continue;
            }
            const regionInfo = findRegionInfo(input, [ i, j ]);
            answer += regionInfo.area * regionInfo.perimeter;
            regionInfo.tiles.forEach(tile => searched.add(JSON.stringify(tile)));
        }
    }
    return answer;
}

export function findRegionInfo(map: string[], start: [ number, number ]): { area: number, perimeter: number, tiles: [ number, number ][] } {  
    function neighbors(tile: [ number, number ]): [ number, number ][] {
        const candidates = [
            [ tile[0] + 1, tile[1] ],
            [ tile[0] - 1, tile[1] ],
            [ tile[0], tile[1] + 1 ],
            [ tile[0], tile[1] - 1 ]
        ].filter(pos => pos[0] >= 0 && pos[0] < map.length && pos[1] >= 0 && pos[1] < map[0].length) as [ number, number ][];

        return candidates.filter(pos => map[tile[0]][tile[1]] === map[pos[0]][pos[1]]);
    }

    function edges(tile: [ number, number ]): number {
        return 4 - neighbors(tile).length;
    }

    const searched: Set<string> = new Set();
    
    function search(current: [ number, number ][]): { area: number, perimeter: number, tiles: [ number, number ][] } {
        if (current.length === 0) {
            return {
                area: 0,
                perimeter: 0,
                tiles: []
            };
        }

        const nextCandidates = current.flatMap(neighbors);

        const next: [ number, number ][] = distinct(nextCandidates.map(pos => JSON.stringify(pos))).filter(pos => !searched.has(pos)).map(pos => JSON.parse(pos));

        next.forEach(pos => searched.add(JSON.stringify(pos)));

        const subResult = search(next);

        return {
            area: subResult.area + current.length,
            perimeter: subResult.perimeter + sum(current.map(edges)),
            tiles: [ ...current, ...subResult.tiles ]
        };
    }

    searched.add(JSON.stringify(start));
    return search([ start ]);
}