export type Antenna = {
    frequency: string,
    position: [ number, number ]
};

export type AntennaMap = {
    width: number,
    height: number,
    antennas: Antenna[]
};

export function groupByFrequency(antennas: Antenna[]): Antenna[][] {
    const memo: any = {};

    for (const antenna of antennas) {
        if (!memo[antenna.frequency]) {
            memo[antenna.frequency] = [];
        }
        memo[antenna.frequency].push(antenna);
    }

    return Object.values(memo);
}