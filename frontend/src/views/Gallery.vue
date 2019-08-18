<template>
    <div class="gallery-page">
        <div class="banner-gallery">
            <img src="../assets/imgs/gallery.jpeg" alt="">
            <Photos/>
            <Videos />
        </div>


    </div>
</template>

<script>
import Photos from "../components/gallery/Photos"
import Videos from "../components/gallery/Videos"
export default {
    name: "gallery",
    components:{
        Photos,
        Videos
    }
}
</script>

<style>
    .gallery-page{
        height: 180vh;
    }

    .banner-gallery{
        width: 100vw;
        height: 700px;
    }

    .banner-gallery img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 580px){
        .gallery-page{
            height: auto;
        }
    }
</style>
