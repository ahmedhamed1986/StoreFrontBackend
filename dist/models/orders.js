"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const database_1 = __importDefault(require("../database"));
class Order {
    // show orders for certain user id
    async show(user_id) {
        try {
            const myConnection = await database_1.default.connect();
            const sql = `SELECT * FROM orders WHERE user_id= ($1)`;
            const result = await myConnection.query(sql, [user_id]);
            myConnection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`can't get orders ${err}`);
        }
    }
    // show completes orders for certain user id
    async showCompleteOrders(user_id) {
        try {
            const myConnection = await database_1.default.connect();
            const sql = `SELECT * FROM orders WHERE user_id= ($1) AND status = 'complete'`;
            const result = await myConnection.query(sql, [user_id]);
            myConnection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`can't get orders ${err}`);
        }
    }
}
exports.Order = Order;
