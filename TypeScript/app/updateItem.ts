import { Item } from './gilded-rose';
import Product from './products/Product';
import AgedBrie from '../app/products/AgedBrie';
import BackstagePasses from '../app/products/BackstagePasses';
import Sulfuras from '../app/products/Sulfuras';
import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from './constants';

const productMap = {
    [`${AGED_BRIE}`]: AgedBrie,
    [`${BACKSTAGE_PASSES}`]: BackstagePasses,
    [`${SULFURAS}`]: Sulfuras
};

export const addMethods = (name: string) => {
    const keys = Object.keys(productMap);
    const isNormalItem = !keys.includes(name);
    const itemWithMethods = isNormalItem ? Product : productMap[`${name}`];
    return itemWithMethods;
};

export const createItem = (item: Item) => {
    const updatedItem = addMethods(item.name);
    return new updatedItem(item);
};

const updateItem = (item: Item) => {
    const updatedItem = createItem(item);
    const result = Object.assign(
        {},
        { 'name': updatedItem.item.name, 'sell_in': updatedItem.calculateSellIn(), 'quality': updatedItem.calculateQuality()}
    )
    return result;
};

export default updateItem;
