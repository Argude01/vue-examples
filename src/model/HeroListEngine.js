export class HeroListEngine {
    constructor(heroes) {
        this.heroes = [];
        heroes.forEach(hero => {
            this.addHero(hero)
        });
    }

    addHero(newHero) {
        this.heroes.push(newHero);
    }

    getHeroes() {
        return this.heroes;
    }
}