<template>
<div class="container">
   <Hero  @add-hero="addHero($event)"></Hero>
   <br>
   <HeroList :heroList="heroes"></HeroList>
</div>
</template>

<script>
import Hero from './Hero.vue';
import HeroList from './HeroList.vue';
import { HeroListEngine } from '../../model/HeroListEngine';
import { HeroEngine } from '../../model/HeroEngine';

let hlm = new HeroListEngine([
    new HeroEngine('Batman', 'Man of the night.'),
    new HeroEngine('Superman', 'Man of Steal.'),
    new HeroEngine('Iron Man', 'The coolest.'),
]);

export default {
  components: { Hero, HeroList },
    name: 'Heroes',
    data() {
        return {
            heroes: hlm.getHeroes(),
        }
    },
    methods: {
        addHero(value) {
            this.heroes.push(value);
        }
    },
};
</script>

<style scoped>
</style>