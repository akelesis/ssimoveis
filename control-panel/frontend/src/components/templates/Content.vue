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
        height: 50px;
        width: 70px;
        border-end-end-radius: 10px;
        border-start-end-radius: 10px;
        left: 300px;
        justify-self: flex-start;
        background-color: #bbb;
        box-shadow: 1px 1px 3px #666;
    }
    .moveback{
        left: 0;
    }
</style>
