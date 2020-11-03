import { Item } from '../gilded-rose';

class Product {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    calculateSellIn() {
        return this.item.sellIn - 1;
    }

    calculateQuality() {
        return this.item.quality - 1;
    }

    hasSellByDatePassed() {
        return this.item.sellIn < 0;
    }
};

export default Product;
