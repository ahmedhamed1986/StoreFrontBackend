"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const store_users = new users_1.Users();
const index = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const users = await store_users.index();
        res.json(users);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const show = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const users = await store_users.show(req.params.id);
        res.json(users);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const create = async (req, res) => {
    const userCreate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    };
    try {
        const newUsers = await store_users.create(userCreate);
        var token = jsonwebtoken_1.default.sign({ nUser: newUsers }, process.env.TOKEN_SECRET);
        res.json(newUsers);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const userStore = (app) => {
    app.get('/users', index);
    app.get('/users/:id', show);
    app.post('/users', create);
};
exports.default = userStore;
