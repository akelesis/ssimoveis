<template>
    <div class="details-page">
        <div class="house-detail-title">
            {{action.title}}
        </div>
        <div class="main-details-box" v-if="ready">
            <div class="pic-container">
                <div class="main-pic">
                    <img :src="mainPic" alt="Foto do empreendimento">
                </div>
                <div class="pic-miniatures">
                    <div class="pic-miniature" v-for="pic in otherPics" :key="pic.id">
                        <img :src="pic" @click="changePic(pic)">
                    </div>
                </div>
            </div>
            <div class="text-container">
                <div class="text-description"><strong>DESCRIÇÃO:</strong><br/>{{action.description}}</div>
            </div>
        </div>
        <div class="wpp-box">
            <img src="../assets/imgs/whatsapp.png" alt="whatsapp logo" class="wpp-img">
            <div class="wpp-contact">
                <h3>SE INTERESSOU POR ESTE IMÓVEL? É SÓ CHAMAR NO WHATSAPP!</h3>
                <button class="wpp-button" @click="wppMessage">CLIQUE AQUI</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseApiUrl from '@/global.js'
export default {
    data(){
        return{
            mainPic: '',
            otherPics: [],
            ready: false
        }
    },
    methods: {
        changePic(pic){
            this.mainPic = pic;
        },
        wppMessage(){
            this.link = this.action.title.split(' ')
            this.link = this.link.join('%20')
            this.link = `https://api.whatsapp.com/send?phone=5573991371695&text=Ola%21%20Queria%20falar%20sobre%20o%20imovel%20${(this.link)}`
            window.location.href = this.link
        },
        setAction(){
            this.mainPic = this.action.mainPic
        },
        getOtherPics(){
            axios.get(`${baseApiUrl}/ActionPics/${this.action.id}`)
                .then(res => {
                    for(let i = 0; i < res.data.length; i++){
                        this.otherPics.push(res.data[i].url)
                    }
                    this.otherPics.push(this.action.mainPic)
                    console.log(this.otherPics)
                })
                setTimeout(() => {
                    this.ready = true
                }, 1500)
        }
    },
    computed:{
        action(){
            return this.$store.state.action
        }
    },
    mounted(){
        this.setAction()
        this.getOtherPics()
    }
}
</script>

<style>
body{
    font-family: "Agency FB", arial;
}
.details-page{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.house-detail-title{
    width: 100vw;
    font-size: 25px;
    padding-top: 50px;
    font-family: "Agency FB", arial;
    text-decoration: underline;
}

.main-details-box{
    background-color: #ccc;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.main-pic{
    width: 30vw;
}

.main-pic img{
    width: 100%;
}

.pic-miniatures{
    display: flex;
    flex-wrap: wrap;
    width: 30vw;
    justify-content: space-between;
}

.pic-miniature{
    cursor: pointer;
}

.pic-miniatures img{
    height: 100px;
    
}

.text-container{
    font-family: "Agency FB", arial;
    width: 35vw;
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: justify;
}

.text-value{
    font-size: 25px;
    margin-top: 20px;
}

.text-type{
    font-size: 25px;
    margin-top: 20px;
}

.text-description{
    font-size: 20px;
}

.wpp-box{
    background-color: rgb(46, 124, 100);
    margin-bottom: 20px;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-family: "Agency FB", arial;
}

.wpp-contact{
    width: 50vw;
    color: #fff;
}

.wpp-contact button{
    border: none;
    padding: 10px 30px;
    background-color: rgb(17, 193, 66);
    color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #444;
    font-size: 20px;
}

.wpp-box img{
    width: 200px;
    margin-left: 70px;
}

@media screen and (max-width: 580px){
    .main-pic img{
        width:90vw;
    }
    .pic-miniatures{
        width: 90vw;
    }

    .pic-miniatures img{
    height: 70px;
    }

    .main-details-box{
        width: 90vw;
        justify-content: center;
    }

    .text-container{
        width:85vw;
        margin-left: 0;
        margin-bottom: 10px;
    }

    .wpp-box{
        justify-content: center;
        padding: 10px;
        width: 90vw;
    }

    .wpp-box img{
        width: 100px;
        margin: 0;

    }
}
</style>
