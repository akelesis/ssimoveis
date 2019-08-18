<template>
    <div class="pics-gallery">
        <h3 class="title-gallery">Fotos:</h3>
        <div class="pic-gallery"><img class="pic-gallery" src="../../assets/imgs/01.jpg" alt="casa 1" /></div>
        <div class="pic-gallery"><img class="pic-gallery" src="../../assets/imgs/02.jpg" alt="casa 2" /></div>
        <div class="pic-gallery"><img class="pic-gallery" src="../../assets/imgs/03.jpg" alt="casa 3" /></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .pics-gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        height: auto;
    }

    .title-gallery{
        width: 100vw;
        margin: 30px 0;
    }

    .pic-gallery{
        width: 400px;
        height: 300px;
        margin: 20px 0;
    } 

    .pic-gallery img{
        width: 100%;
    }
</style>
