"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../orders");
const testorder = new orders_1.Order();
describe('Order Model', () => {
    describe('Show method', () => {
        it('should be there', () => {
            expect(testorder.show).toBeDefined;
        });
        it('should equal to followng values', async () => {
            const result = await testorder.show(1);
            expect(result[0].status == 'active').toBeTrue;
            expect(result[1].status == 'complete').toBeTrue;
            expect(result[3].quantity).toEqual(3);
        });
    });
    describe('ShowComplete method', () => {
        it('should be there', () => {
            expect(testorder.showCompleteOrders).toBeDefined;
        });
        it('should equal to followng values', async () => {
            const result = await testorder.showCompleteOrders(1);
            expect(result[1].product_id).toEqual(3);
            expect(result[0].quantity).toEqual(15);
        });
    });
});
