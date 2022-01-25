<template>
    <div>
        <!-- <div class="form-group">
            <label for="">Hero Name</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="newHeroName">
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="newHeroDescription">
            <button type="button" class="btn btn-primary mt-2" @click="addHero()" :disabled="newHeroName === ''">Add</button>
        </div> -->
        <br >
        <form class="was-validated">
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationServer01">Hero name</label>
                    <input type="text" class="form-control" id="validationServer01" required :is-invalid="newHeroName !== ''" v-model="newHeroName">
                    <div class="valid-feedback">
                       Ready!
                    </div>
                     <div id="validationServer03Feedback" class="invalid-feedback">
                        Type something.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationServer03">Description</label>
                    <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required :is-invalid="newHeroDescription !== ''" v-model="newHeroDescription">
                     <div class="valid-feedback">
                       Ready!
                    </div>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        Type something.
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit" @click="addHero()" :disabled="newHeroName === '' || newHeroDescription === ''">Add</button>
        </form>
    </div>
</template>

<script>
    import { HeroEngine } from '../../model/HeroEngine';

    export default {
        name: 'Hero',
        data() {
            return {
                newHeroName: '',
                newHeroDescription: '',
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