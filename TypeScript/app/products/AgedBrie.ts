import Product from "./Product";
import { MAX_QUALITY } from '../constants';
import { increaseValue } from '../utilities/calculateValues';

class AgedBrie extends Product {
    calculateQuality() {
        return this.hasSellByDatePassed() ? increaseValue(this.item.quality, 2, MAX_QUALITY) : increaseValue(this.item.quality, 1, MAX_QUALITY);
    }
}

export default AgedBrie;
