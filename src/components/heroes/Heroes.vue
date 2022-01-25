<template>
<div class="container">
   <Hero  @add-hero="addHero($event)"></Hero>
   <HeroList :heroList="heroes"></HeroList>
</div>
</template>

<script>
import Hero from './Hero.vue';
import HeroList from './HeroList.vue';

export default {
  components: { Hero, HeroList },
    name: 'Heroes',
    data() {
        return {
            heroes: ['Batman', 'Superman', 'Gatuvela'],
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