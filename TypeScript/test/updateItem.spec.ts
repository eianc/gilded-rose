import { expect } from 'chai';
import { Item } from '../app/gilded-rose';
import { addMethods } from '../app/updateItem';
import Product from '../app/products/Product';
import AgedBrie from '../app/products/AgedBrie';


describe('updateItem', () => {
    describe('addMethods', () => {
        it('creates the class for normal product', () => {
            const itemWithMethods = addMethods('foo');
            expect(itemWithMethods).to.be.a('function');
        });
        it('creates the class for Aged Brie product', () => {
            const itemWithMethods = addMethods('Aged Brie');
            expect(itemWithMethods).to.be.a('function');
        });
    });

    describe('createItem', () => {
        it('creates an instance of the normal product', () => {
            const itemWithMethods = addMethods('foo');
            const call = new itemWithMethods(new Item('foo', 10, 20));
            expect(call).to.be.an.instanceof(Product);
        });
        it('creates an instance of the aged brie product', () => {
            const itemWithMethods = addMethods('Aged Brie');
            const call = new itemWithMethods(new Item('Aged Brie', 10, 20));
            expect(call).to.be.an.instanceof(AgedBrie);
        });
    });


});
