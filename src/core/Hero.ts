module.exports = class Hero {
    _level: number;
    _health: number;
    _isDie: boolean;
    _deck: Array<object>;

    constructor (config: {
        _level: number,
        _health: number,
        _deck: Array<any>,
        _isDie: boolean
    }) {

        const { _level, _health, _deck, _isDie } = config;

        this._level = _level;
        this._health = _health;
        this._deck = _deck;
        this._isDie = _isDie;
    }

    addCards (arr: Array<object>): void {
        this._deck = this._deck.concat(arr)
    }

    hit (val: number): void {
        this._health = this._health - val;
        if (this._health < 1) this._isDie = true;
    }
};