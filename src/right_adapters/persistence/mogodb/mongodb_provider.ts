import mongoose from 'mongoose'

export const connect = () => {
    mongoose.connect(
        'mongodb://localhost/mentoring',
        { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.info('-------------------------------------')
            console.info(`\tconnected to mongodb`)
            console.info('-------------------------------------')
        })
}
