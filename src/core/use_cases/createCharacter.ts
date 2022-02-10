interface character {
    attack: number;
    defense: number;
    health: number;
    level: number;
    magik: number;
    skillPoints: number;
}

export const createCharacter = (): character => ({
    attack: 0,
    defense: 0,
    health: 10,
    level: 1,
    magik: 0,
    skillPoints: 12,
});
