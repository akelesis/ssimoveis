<template>
    <div class="actions-page">
        <div class="action" :id="'action-0'+action.id" v-for="action in actions" :key="action.id">
            <img class="img-action" :src="action.mainPic" alt="" v-if="action.id%2 == 0">
            <div class="action-text">
                <h3>{{action.title}}</h3>
                <p>{{action.description}}</p>
                <button class="wpp-btn" @click="actionPage(action)">SAIBA MAIS</button>
            </div>
            <img class="img-action" :src="action.mainPic" alt="" v-if="action.id%2 == 1">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseApiUrl from '@/global.js'
export default {
    data(){
        return{
            actions: []
        }
    },
    methods: {
        getActions(){
            axios.get(`${baseApiUrl}/actions`)
                .then(res => {
                    this.actions = res.data

                })
        },
        actionPage(action){
            this.$store.commit('getAction', action)
            console.log(action)
            this.$router.push({path: "/action"})
        },
    },
    mounted(){
        this.getActions();
    }
}
</script>

<style>
    /* .actions-page{
        height: 100vh;
        
    } */

    .action{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #action-01{
        background-color: rgb(242,242,242);
    }

    #action-02{
        background-color: #fff;
        justify-content: space-between;
    }

    #action-03{
        background-color: #ccc;
    }

    .img-action{
        width: 50vw;
        height: 700px;
        justify-self: flex-start;
    }

    .action-text{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 40vw;
        margin-left: 50px;
        margin-top: 50px;
        justify-self: flex-end;
        justify-content: center;
        text-align: justify;
        font-family: "Agency FB", arial;
    }

    .action-text h3{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: justify;
        width: 100%;
    }

    .action-text p{
        font-size: 20px;
    }

    .wpp-btn{
        border: none;
        background-color: rgb(16,193,66);
        margin-bottom: 10px;
        width: 30vw;
        height: 50px;
        color: #fff;
        font-size: 20px;
        border-radius: 5px;
    }

@media screen and (max-width: 580px){
    .img-action{
        width: 100vw;
        height: 300px;
        margin: 10px 0;
    }

    .action-text{
        width: 100vw;
    }

    .wpp-btn{
        width: 70vw;
    }
}
</style>
