export class Hero {
    _level: number;
    _health: number;
    _isDie: boolean;
    _deck: Array<object>;

    constructor () {
        this._level = 1;
        this._health = 5;
        this._deck = [];
        this._isDie = false;
    }

    addCards (arr: Array<object>): void {
        this._deck = this._deck.concat(arr)
    }

    hit (val: number): void {
        this._health = this._health - val;
        if (this._health < 1) this._isDie = true
    }
}