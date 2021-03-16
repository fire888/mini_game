import { DECK } from '../constants/constants'

export const getCargds = (count: number): Array<object> => {
    const arr = [];
    for (let i = 0; i < count; ++i) {
        const r = Math.floor(Math.random() * DECK.length);
        arr.push(Object.assign({}, DECK[r]))
    }
    return arr;
};