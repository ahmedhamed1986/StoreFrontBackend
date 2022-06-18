import supertest from 'supertest'
import app from '../../server'
import { store_users } from '../users';
import userStore from '../users';



const request = supertest(app)

describe('test of users routes', ()=> {
    it('index method should return 200', async()=>{

        const token1 ="fsdfsdfsdfsdf"

        const response = await request.get('/adasd')
        expect(response.status).toBe(200)
    })
})