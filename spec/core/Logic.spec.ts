const Logic = require('./../../src/core/Logic.ts');



describe("spec/enemy.spec.ts", function() {

    const l = new Logic();

    it("Logic props", function() {
        expect(l._countBattle).toBe(-1);
    });
});
