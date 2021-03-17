const Enemy = require('./../../src/core/Enemy.ts');


describe("spec/enemy.spec.ts", function() {

    //const hero = new Enemy(constants.START_HERO_CONFIG);
    const enemy = new Enemy(1, []);

    it("Enemy props", function() {
        expect(enemy._level).toBe(1);
    });
});
