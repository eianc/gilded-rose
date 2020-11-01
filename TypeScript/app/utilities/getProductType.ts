import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from '../constants';

export const isAgedBrie = (name: string) => {
    return name === AGED_BRIE;
}

export const isBackstagePasses = (name: string) => {
    return name === BACKSTAGE_PASSES;
}

export const isSulfuras = (name: string) => {
    return name === SULFURAS;
}