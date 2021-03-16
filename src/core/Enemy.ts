export class Enemy {
    _level: number;
    _health: number;
    _isDie: boolean;
    _deck: Array<object>;

    constructor (level: number, deck: Array<object>) {
        this._level = level;
        this._health = level;
        this._deck = deck;
        this._isDie = false;
    }

    hit (val: number): void {
        this._health = this._health - val;
        if (this._health < 1) this._isDie = true;
    }
}