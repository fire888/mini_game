const COLODE = [
{
    school: 'attack',
    str: 1,
},
{
    school: 'attack',
    str: 2,
},
{
    school: 'attack',
    str: 3,
},
{
    school: 'heal',
    str: 1,
},
{
    school: 'heal',
    str: 2,
},
{
    school: 'heal',
    str: 3,
},
{
    school: 'freeze',
    str: 1,
},
{
    school: 'freeze',
    str: 2,
},
{
    school: 'freeze',
    str: 3,
},
]



const MAX_CARDS = 5



export class Logic {
    constructor () {
        this._hero = new Hero() 
        const cards = getCargds(MAX_CARDS)
        this._hero.addCards(cards)
        this._countBattle = -1

        this._startIterate()
    }


    _startIterate () {
        const next = () => {
            ++this._countBattle
            this._fight(this._countBattle, next)
        }
        next()
    }

    _fight (countBattle, callback) {
        const enemy = new Enemy(countBattle)

        //debugger
        setTimeout(callback, 3000)
    }
}




class Hero {
    constructor () {
        this._level = 1
        this._health = 5
        this._colode = []
        this._isDie = false
    }

    addCards (arr) {
        this._colode = this._colode.concat(arr)
    }

    hit (val) {
        this._health = this._health - val
        if (this._health < 1) this._isDie = true
    }
}




class Enemy {
    constructor (level) {
        this._level = level
        this._health = level
        this._colode = getCargds(this._level)
        this._isDie = false
    }

    hit (val) {
        this._health = this._health - val
        if (this._health < 1) this._isDie = true
    }
}




const getCargds = count => {
    const arr = []
    for (let i = 0; i < count; ++i) {
        const r = Math.floor(Math.random() * COLODE.length) 
        arr.push(Object.assign({}, COLODE[r]))
    }
    return arr
}



