import Product from './Product';
import { decreaseValue } from '../utilities/calculateValues';

class Conjured extends Product {
    calculateQuality() {
       return this.hasSellByDatePassed() ? decreaseValue(this.item.quality, 4) : decreaseValue(this.item.quality, 2);
    }
};

export default Conjured;
