import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS, MAX_QUALITY, MAX_QUALITY_SULFURAS } from '../app/constants';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    describe('Aged Brie', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([new Item(AGED_BRIE, 2, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Aged Brie');
        });

        it('should increase the quality by 1, when there are less than 5 days', () => {
            const gildedRose = new GildedRose([new Item(AGED_BRIE, 2, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(1);
        });

        it('should increase the quality by 1, when there are less than 10 days', () => {
            const gildedRose = new GildedRose([new Item(AGED_BRIE, 9, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });

        it('should not increase the quality by 1, when quality has reached its limit', () => {
            const gildedRose = new GildedRose([new Item(AGED_BRIE, 9, MAX_QUALITY)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(MAX_QUALITY);
        });

        it('should increase the quality by 2 after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item(AGED_BRIE, 0, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });
    });

    describe('Backstage passes', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([ new Item(BACKSTAGE_PASSES, 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        });

        it('should increase the quality by 1, when there are more than 10 days', () => {
            const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 15, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(21);
        });

        it('should increase the quality by 2, when there are less than 10 days', () => {
            const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(22);
        });

        it('should increase the quality by 3, when there are less than 5 days', () => {
            const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 4, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(23);
        });

        it('should stop increasing the quality when it reaches the limit', () => {
            const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 10, 49)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(MAX_QUALITY);
        });

        it('should stop increasing the quality when it reaches the limit', () => {
            const gildedRose = new GildedRose([new Item(BACKSTAGE_PASSES, 5, 49)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(MAX_QUALITY);
        });

        it('should drop the quality to 0 after the sell by date has passed', () => {
            const gildedRose = new GildedRose([ new Item(BACKSTAGE_PASSES, 0, 20) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('Sulfuras', () => {
        it('should match the name', () => {
            const gildedRose = new GildedRose([new Item(SULFURAS, 0, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        });

        it('should keep the same quality', () => {
            const gildedRose = new GildedRose([new Item(SULFURAS, 0, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(MAX_QUALITY_SULFURAS);
        });

        it('should keep the same quality after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item(SULFURAS, -1, 80)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(MAX_QUALITY_SULFURAS);
        });
    });

    describe('Normal Product', () => {
        it('should decrease the quality by 1, when there are 5 days or less days left', () => {
            const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(6);
        });

        it('should decrease the quality by 1, when there are 10 days or less days left', () => {
            const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(19);
        });

        it('should decrease the quality by 2, after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", -1, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(18);
        });

        it('should not decrease the quality lower than 0, after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", -1, 1)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });

    describe('Conjured Product', () => {
        it('should decrease the quality by 2, when there are 5 days or less days left', () => {
            const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });

        it('should decrease the quality by 2, when there are 10 days or less days left', () => {
            const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 6)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(4);
        });

        it('should decrease the quality by 4, after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, 6)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(2);
        });

        it('should not decrease the quality lower than 0, after the sell by date has passed', () => {
            const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, 1)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
    });
});
