const c = require('../constants/constants');

const { DECK } = c;

const SCHOOLS = ['attack', 'freeze', 'heal'];

// module.exports = class {
//     _level: number;
//     _deck: Array<object>;
//
//     constructor () {
//       this._level = 0;
//       this._deck = [];
//     }
//
//     createDeck (level: number, count: number = 30) {
//         this._deck = [];
//         for (let i = 0; i < count; i++) {
//             this._deck.push({
//                 'school': SCHOOLS[Math.floor(Math.random() * SCHOOLS.length)],
//                 'strength': level,
//             })
//         }
//     }
//
// };
module.exports.getCargds = (count: number): Array<object> => {
    const arr = [];
    for (let i = 0; i < count; ++i) {
        const r = Math.floor(Math.random() * DECK.length);
        arr.push(Object.assign({}, DECK[r]))
    }
    return arr;
};