import Product from "./Product";
import { MAX_QUALITY } from '../constants';
import { increaseValue } from '../utilities/calculateValues';

class BackstagePasses extends Product {
    calculateQuality() {
        if (this.item.sellIn > 10) {
            return increaseValue(this.item.quality, 1, MAX_QUALITY);
        } else if ( 5 < this.item.sellIn && this.item.sellIn <= 10) {
            return increaseValue(this.item.quality, 2, MAX_QUALITY);
        } else if ( 0 < this.item.sellIn && this.item.sellIn <= 5) {
            return increaseValue(this.item.quality, 3, MAX_QUALITY);
        }
        return 0;
    }
}

export default BackstagePasses;