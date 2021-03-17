const Enemy1 = require('./Enemy');
const Hero1 = require('./Hero');
const conf = require('../constants/constants');
const cardsManager = require('./CardsManager');



const { START_HERO_CONFIG } = conf;



module.exports = class {


    _hero: typeof Hero1;
    _countBattle: number;


    constructor () {
        this._hero = new Hero1(START_HERO_CONFIG);
        const cards = cardsManager.getCargds(START_HERO_CONFIG._startCountCards);
        this._hero.addCards(cards);
        this._countBattle = -1;
    }


    start () {
        this._startIterate();
    }


    _startIterate (): void {
        const next = (): void => {
            ++this._countBattle;
            this._fight(this._countBattle, next);
        };
        next();
    }


    _fight (countBattle: number, callback: () => void ): void {
        const enemyCards = cardsManager.getCargds(countBattle);
        const enemy = new Enemy1(countBattle, enemyCards);

        debugger;
        setTimeout(callback, 3000);
    }
};



