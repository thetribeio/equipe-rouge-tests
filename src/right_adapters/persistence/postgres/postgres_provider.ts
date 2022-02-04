import "reflect-metadata";
import { createConnection } from "typeorm";
import { CharacterPersistenceModel } from "./entity/character";

export const connect = () => createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: "password",
    database: "mentoring",
    entities: [
        CharacterPersistenceModel
    ],
    synchronize: true,
    logging: false
});
