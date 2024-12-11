export function changeState(rock: number): number[] {
    if (rock === 0) {
        return [ 1 ];
    }
    if (rock.toString().length % 2 === 0) {
        const str = rock.toString();
        return [ +str.slice(0, str.length / 2), +str.slice(str.length / 2) ];
    }
    return [ rock * 2024 ];
}