<template>
  <div>
    <ul class="list-group mt-4">
      <li
        class="list-group-item"
        v-for="(hero, index) in heroList"
        :key="index"
      >
        <b>
          {{ hero.name }}
        </b>
        <br />
        {{ hero.description }}
      </li>
    </ul>
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