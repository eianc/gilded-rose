import { expect } from 'chai';
import { Item } from '../app/gilded-rose';
import { addMethods } from '../app/updateItem';
import Product from '../app/products/Product';
import AgedBrie from '../app/products/AgedBrie';
import BackstagePasses from '../app/products/BackstagePasses';
import Conjured from '../app/products/Conjured';
import Sulfuras from '../app/products/Sulfuras';


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
        it('creates an instance of the Aged Brie product', () => {
            const itemWithMethods = addMethods('Aged Brie');
            const call = new itemWithMethods(new Item('Aged Brie', 10, 20));
            expect(call).to.be.an.instanceof(AgedBrie);
        });
        it('creates an instance of the BackstagePasses product', () => {
            const itemWithMethods = addMethods('Backstage passes to a TAFKAL80ETC concert');
            const call = new itemWithMethods(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20));
            expect(call).to.be.an.instanceof(BackstagePasses);
        });
        it('creates an instance of the Conjured product', () => {
            const itemWithMethods = addMethods('Conjured Mana Cake');
            const call = new itemWithMethods(new Item('Conjured Mana Cake', 10, 20));
            expect(call).to.be.an.instanceof(Conjured);
        });
        it('creates an instance of the Sulfuras product', () => {
            const itemWithMethods = addMethods('Sulfuras, Hand of Ragnaros');
            const call = new itemWithMethods(new Item('Sulfuras, Hand of Ragnaros', 10, 20));
            expect(call).to.be.an.instanceof(Sulfuras);
        });
    });
});
