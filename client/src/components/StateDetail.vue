<template>
    
    <div class="state-info">

        <span class="state-name">{{ state.name }}</span>

        <div>
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
        </div>


    </div>
</template>


<script>

export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object  // dont modify props
    },
    data() {
        return {
            visited: this.state.visited  // ok to modify data
        }
    },

    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }

}

</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8 rem;
    width: 10rem;
    border: 1px green solid;
    border-radius: 3rem;
    background-color: rgb(11, 230, 208)
    ;
}

.visit-state {
    margin: 1rem;
    text-align: center;

}


</style>