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

const orderStore = (app:express.Application) => {
    app.get('/orders/:id',user_oders)
    app.get('/orders/:id/complete',completes_oders)
}

export default orderStore