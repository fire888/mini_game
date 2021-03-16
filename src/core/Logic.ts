import { Hero } from './Hero';
import { Enemy } from './Enemy';
import { MAX_CARDS } from '../constants/constants';
import { getCargds } from './CardsManager'



export class Logic {
    _hero: Hero;
    _countBattle: number;

    constructor () {
        this._hero = new Hero() 
        const cards = getCargds(MAX_CARDS)
        this._hero.addCards(cards)
        this._countBattle = -1

        this._startIterate()
    }


    _startIterate (): void {
        const next = (): void => {
            ++this._countBattle;
            this._fight(this._countBattle, next);
        };
        next()
    }

    _fight (countBattle: number, callback: () => void ): void {
        const enemyCards = getCargds(countBattle)
        const enemy = new Enemy(countBattle, enemyCards);

        debugger;
        setTimeout(callback, 3000);
    }
}



