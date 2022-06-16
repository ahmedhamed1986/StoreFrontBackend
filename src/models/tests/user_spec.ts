import {Users, user_type} from "../users"

const testUser = new Users()

describe('User Model', ()=> {

    describe('Index method', ()=>{

        it('should be there',()=>{
            expect(testUser.index).toBeDefined
        })

        it('should equal to followng values',async ()=>{
            const result = await testUser.index()
            expect(result[0].firstName == 'ahmed').toBeTrue
            expect(result[1].lastName == 'abdallah').toBeTrue
        })
    })


    describe('Show method', ()=>{

        it('should be there',()=>{
            expect(testUser.show).toBeDefined
        })

        it('should equal to followng values',async ()=>{
            const result = await testUser.show(2)
            expect(result.firstName == 'mohamed').toBeTrue
        })
    })


    describe('Create method', ()=>{

        it('should be there',()=>{
            expect(testUser.create).toBeDefined
        })

        it('should create row',async ()=>{
            const newUser:user_type = {
                firstName: 'user1',
                lastName: 'lastname1',
                password:'testpassword'
            }
            const result = await testUser.create(newUser)
            expect(result.firstName).toEqual('user1')
        })
    })

})