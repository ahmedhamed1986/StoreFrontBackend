import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV
} = process.env


if(ENV === 'dev'){
    var POSTGRES_DB = process.env.POSTGRES_DB
}else if (ENV === 'test') {
    var POSTGRES_DB = process.env.POSTGRES_DB_TEST
}

console.log(`my env is ${ENV}`)

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});

export default client
    