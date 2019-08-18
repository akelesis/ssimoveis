<template>
    <div class="content">
        <button class="menu-toggle" :class="{'moveback':!menuVisibility}" @click="toggleMenu" v-if="loggedIn"><i class="fas fa-bars"></i></button>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Content",
    methods: {
        toggleMenu(){
            this.$store.commit('toggleMenu')
        }
    },
    computed:{
        loggedIn(){
            return this.$store.state.loggedIn
        },
        menuVisibility(){
            return this.$store.state.menuVisibility
        }
    }
}
</script>

<style>
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        grid-area: content;
        background-color: #eee;
        padding: 20px;
    }

    .menu-toggle{
        border: none;
        position: absolute;
        left: 300px;
        justify-self: flex-start;
        background-color: #aaa;
    }
    .moveback{
        left: 0;
    }
</style>
