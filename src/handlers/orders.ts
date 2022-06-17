import express, {Request, Response} from 'express'
import { Order, order_type } from '../models/orders'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const store_orders = new Order()

const user_oders =async (req:Request, res:Response) => {
    try{
        jwt.verify(req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`Invalid token: ${err}`)
        return
    }

    try{
        const orders = await store_orders.show(req.params.id as unknown as number)
        res.json(orders)
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const completes_oders =async (req:Request, res:Response) => {
    try{
        jwt.verify(req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`Invalid token: ${err}`)
        return
    }
    
    try{
        const orders = await store_orders.showCompleteOrders(req.params.id as unknown as number)
        res.json(orders)
    }catch(err){
        res.status(400)
        res.json(err)
    }
    
}

const addProduct =async (req:Request, res: Response) => {
    try{
        jwt.verify(req.body.token, process.env.TOKEN_SECRET as string)
    }catch(err){
        res.status(401)
        res.json(`Invalid token: ${err}`)
        return
    }

    try {
        const orderID = req.params.id as unknown as number;
        const productID = req.body.productID;
        const qty = req.body.quantity;

        const addedProduct = await store_orders.addProduct(qty, orderID, productID);
        res.json(addedProduct)
    }catch(err){
        res.status(400)
        res.json(err)
    }
}


const orderStore = (app:express.Application) => {
    app.get('/orders/:id',user_oders)
    app.get('/orders/:id/complete',completes_oders)
    app.post('/orders/:id/products',addProduct)
}

export default orderStore