import mongoose from 'mongoose'
import { CharacterDto } from '../../../../core/domain/interface/characterDto'

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    attack: {
        type: Number,
        required: true,
    },
    defense: {
        type: Number,
        required: true,
    },
    magik: {
        type: Number,
        required: true,
    },
    health: {
        type: Number,
        required: true,
    },
    skill: {
        type: Number,
        required: true,
    },
})

characterSchema.statics.build = (characterDto: CharacterDto) => {
    return new CharacterPersistenceModel(characterDto)
}

interface CharacterDocument extends mongoose.Document {
    readonly name: string;
    readonly attack: number;
    readonly defense: number;
    readonly magik: number;
    readonly health: number;
    readonly skill: number;
}
interface CharacterPersistenceModel extends mongoose.Model<CharacterDocument> {
    build(data: CharacterDto): CharacterDocument
}
export const CharacterPersistenceModel = mongoose.model<CharacterDocument, CharacterPersistenceModel>('Character', characterSchema)
