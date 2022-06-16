import client from "../database";

export type order_type ={
    id?: number;
    status: string;
    quantity: number;
    product_id: number;
    user_id: number;

}

export class Order{

    // show orders for certain user id
    async show(user_id: number): Promise<order_type[]> {
        
        try {
            const myConnection = await client.connect();
            const sql = `SELECT * FROM orders WHERE user_id= ($1)`;
            const result = await myConnection.query(sql,[user_id])
            myConnection.release()
            
            return result.rows
            
        }catch (err){
            throw new Error(`can't get orders ${err}`)
        }
    }

    // show completes orders for certain user id
    async showCompleteOrders(user_id: number): Promise<order_type[]> {
        try {
            const myConnection = await client.connect();
            const sql = `SELECT * FROM orders WHERE user_id= ($1) AND status = 'complete'`;
            const result = await myConnection.query(sql,[user_id])
            myConnection.release()
            return result.rows
        }catch (err){
            throw new Error(`can't get orders ${err}`)
        }
    }

    
}