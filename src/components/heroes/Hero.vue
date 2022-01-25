<template>
    <div>
        <div class="form-group">
            <label for="">Hero Name</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="newHeroName">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="newHeroDescription">
        <button type="button" class="btn btn-primary mt-2" @click="addHero()" :disabled="newHeroName === ''">Add</button>
        </div>
    </div>
</template>

<script>
    import { HeroEngine } from '../../model/HeroEngine';

    export default {
        name: 'Hero',
        data() {
            return {
                newHeroName: this.newHeroName,
                newHeroDescription: this.newHeroDescription,
                newHero: {},
            }
        },
        methods: {
                addHero() {
                    this.newHero = new HeroEngine(this.newHeroName, this.newHeroDescription);
                    this.$emit("add-hero", this.newHero);
                    this.newHeroName = '';
                    this.newHeroDescription = '';
            }
        },
        emits: ["add-hero"],
    }
</script>

<style scoped>

</style>