import { decreaseValue, increaseValue } from '../app/utilities/calculateValues';
import { isAgedBrie, isBackstagePasses, isSulfuras } from '../app/utilities/getProductType';
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }


    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (!isAgedBrie(this.items[i].name) && !isBackstagePasses(this.items[i].name)) {
                if (this.items[i].quality > 0) {
                    if (!isSulfuras(this.items[i].name)) {
                        this.items[i].quality = decreaseValue(this.items[i].quality);
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = increaseValue(this.items[i].quality);
                    if (isBackstagePasses(this.items[i].name)) {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = increaseValue(this.items[i].quality);
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = increaseValue(this.items[i].quality);
                            }
                        }
                    }
                }
            }
            if (!isSulfuras(this.items[i].name)) {
                this.items[i].sellIn = decreaseValue(this.items[i].sellIn);
            }
            if (this.items[i].sellIn < 0) {
                if (!isAgedBrie(this.items[i].name)) {
                    if (!isBackstagePasses(this.items[i].name)) {
                        if (this.items[i].quality > 0) {
                            if (!isSulfuras(this.items[i].name)) {
                                this.items[i].quality = decreaseValue(this.items[i].quality);
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = increaseValue(this.items[i].quality);
                    }
                }
            }
        }

        return this.items;
    }
}
