<template>
  <div>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action"
        v-for="(hero, index) in heroList" :key="index"
        >
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ hero.name }}</h5>
            <small>3 days ago</small>
            </div>
            <p class="mb-1"> {{ hero.description }}</p>
            <!-- <small>And some small print.</small> -->
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroList",
  props: {
    heroList: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>