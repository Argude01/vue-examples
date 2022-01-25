export class HeroListEngine {
    constructor() {
        this.heroes = [];
    }

    addHero(newHero) {
        this.heroes.push(newHero);
    }

    getHeroes() {
        return this.heroes;
    }
}