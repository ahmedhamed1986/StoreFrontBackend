"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store_products = new products_1.Product();
const index = async (req, res) => {
    try {
        const products = await store_products.index();
        res.json(products);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const show = async (req, res) => {
    try {
        const products = await store_products.show(req.params.id);
        res.json(products);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const create = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const productCreate = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
        const newProducts = await store_products.create(productCreate);
        res.status(200);
        res.json(newProducts);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const productStore = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
};
exports.default = productStore;
