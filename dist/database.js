"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, ENV } = process.env;
if (ENV === 'dev') {
    var POSTGRES_DB = process.env.POSTGRES_DB;
}
else if (ENV === 'test') {
    var POSTGRES_DB = process.env.POSTGRES_DB_TEST;
}
console.log(`my env is ${ENV}`);
const client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});
exports.default = client;
