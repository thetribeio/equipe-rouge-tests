import { createCharacter } from './createCharacter';

describe('When I create a character', () => {
    test('it should have correct stats', () => {
        const character = createCharacter()

        expect(character.level).toEqual(1)
        expect(character.skillPoints).toEqual(12)
        expect(character.health).toEqual(10)
        expect(character.attack).toEqual(0)
        expect(character.defense).toEqual(0)
        expect(character.magik).toEqual(0)
    })
})
