export function part2(input: [string, string, string][]): number {
    return input.filter(isValidGroup).length;
}

export function isValidGroup(group: [string, string, string]): boolean {
    const diagonal1 = group[0][0] + group[1][1] + group[2][2];
    const diagonal2 = group[2][0] + group[1][1] + group[0][2];

    return (diagonal1 === 'MAS' || diagonal1 === 'SAM') && (diagonal2 === 'MAS' || diagonal2 === 'SAM');
}