"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store_orders = new orders_1.Order();
const user_oders = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const orders = await store_orders.show(req.params.id);
        res.json(orders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const completes_oders = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const orders = await store_orders.showCompleteOrders(req.params.id);
        res.json(orders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const addProduct = async (req, res) => {
    try {
        jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
    }
    catch (err) {
        res.status(401);
        res.json(`Invalid token: ${err}`);
        return;
    }
    try {
        const orderID = req.params.id;
        const productID = req.body.productID;
        const qty = req.body.quantity;
        const addedProduct = await store_orders.addProduct(qty, orderID, productID);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const orderStore = (app) => {
    app.get('/orders/:id', user_oders);
    app.get('/orders/:id/complete', completes_oders);
    app.post('/orders/:id/products', addProduct);
};
exports.default = orderStore;
