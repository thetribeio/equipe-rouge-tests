import express from 'express'
import { CharacterPersistenceModel } from '../right_adapters/persistence/mogodb/model/character'
// import { CharacterPersistenceModel } from '../right_adapters/persistence/postgres/entity/character'

const PORT = process.env.PORT || 3000

export const init = async (provider:any) => {
    const app = express()
    app.use(express.json())

    await provider.connect()

    app.get('/', async (req, res) => {
        return res.send('Hello World!')
    })

    app.get('/character', async (req, res) => {
        const characters = await CharacterPersistenceModel.find({}).exec()

        return res.status(200).send(characters)
    })

    app.post('/character', async (req, res) => {
        const characterPersistenceModel = CharacterPersistenceModel.build(req.body)
        await characterPersistenceModel.save()
        return res.status(201).send(characterPersistenceModel)
    })

    app.listen(PORT, () => {
        console.info('-------------------------------------')
        console.info(`server is up, on port : ${PORT}`)
        console.info('-------------------------------------')
    })
}

