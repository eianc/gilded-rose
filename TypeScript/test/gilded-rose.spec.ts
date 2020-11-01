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

    describe('Aged Brie', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Aged Brie');
        });
        it('should increase the quality by 1, when there are less than 5 days', () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(1);
        });
        it('should increase the quality by 1, when there are less than 10 days', () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 9, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });
        it('should not increase the quality by 1, when quality has reached its limit', () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 9, qualityLimit)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(qualityLimit);
        });
        it('should increase the quality by 2 after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });
    });

    describe('Backstage passes', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
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

        it('should drop the quality to 0 after the sell by date has passed', () => {
            const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('Sulfuras', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        });
        it('should keep the same quality', () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(specialQualityLimit);
        });
        it('should keep the same quality after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(specialQualityLimit);
        });
    });
});
