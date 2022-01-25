<template>
<div class="container">
   <Hero  @add-hero="addHero($event)"></Hero>
   <HeroList :heroList="heroes"></HeroList>
</div>
</template>

<script>
import Hero from './Hero.vue';
import HeroList from './HeroList.vue';
import { HeroListEngine } from '../../model/HeroListEngine';

let hlm = new HeroListEngine();

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