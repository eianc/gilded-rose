import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    const qualityLimit = 50;
    const specialQualityLimit = 80;

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    describe('Backstage passes', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        });

        it('should drop the quality to 0 after the concert', () => {
            const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });

        it('should increase the quality by 1', () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(21);
        });

        it('should increase the quality by 2', () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(22);
        });

        it('should increase the quality by 3', () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(23);
        });

        it('should stop increasing the quality when it reaches the limit', () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(qualityLimit);
        });

        it('should stop increasing the quality when it reaches the limit', () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(qualityLimit);
        });
    });
});
