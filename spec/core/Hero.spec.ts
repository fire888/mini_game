const constants = require('./../../src/constants/constants')
const Hero = require('./../../src/core/Hero.ts');


describe("spec/hero.spec.ts", function() {

    const h = new Hero(constants.START_HERO_CONFIG);

    it("Hero props", function() {
        expect(h._level).toBe(constants.START_HERO_CONFIG._level);
        expect(h._health).toBe(constants.START_HERO_CONFIG._health);
        expect(h._isDie).toBe(constants.START_HERO_CONFIG._isDie);
        expect(h._deck).toBe(constants.START_HERO_CONFIG._deck);
    });
});
