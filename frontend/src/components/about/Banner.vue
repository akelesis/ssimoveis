<template>
    <div class="banner">
        <img :src="img" alt="banner sobre nós"/>
        <div class="overlay">QUEM SOMOS:</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img: "./imgs/about.png"
        }
    }
}
</script>

<style>
@import url(http://allfont.net/allfont.css?fonts=agency-fb);
    .banner{
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        height: 600px;
    }

    .banner img{
        height: 100%;
        width: 100%;
        position: relative;
    }

    .overlay{
        display: flex;
        background-color: #fff9;
        height: 150px;
        font-family: "Agency FB", arial;
        font-size: 52px;
        position: absolute;
        width: 100vw;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
    }

    @media screen and (max-width: 580px){
        .banner{
            height: 200px;
        }
        .overlay{
            height: 60px;
            font-size: 35px;
        }
    }
</style>
