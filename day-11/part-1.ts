export function part1(input: number[]): number {
    let state = input;
    for (let i = 0; i < 25; i++) {
        state = blink(state);
    }
    return state.length;
}

export function blink(rocks: number[]): number[] {
    return rocks.flatMap(changeState);
}

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