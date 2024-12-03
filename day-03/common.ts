export type Instruction = [number, number] | 'do' | 'dont';

export type Program = Instruction[];