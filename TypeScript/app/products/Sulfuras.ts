import Product from "./Product";
import { MAX_QUALITY_SULFURAS } from '../constants';

class Sulfuras extends Product {
    calculateQuality() {
        return MAX_QUALITY_SULFURAS;
    }
}

export default Sulfuras;
