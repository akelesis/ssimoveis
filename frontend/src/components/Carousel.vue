<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="main-slides"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://historias.pontosmultiplus.com.br/wp-content/uploads/2018/06/Vitoria-da-conquista_Foto_Digaoboyy-Shutterstock.jpg"
        class="slide-page"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.ytimg.com/vi/pvCMZgs-zlQ/maxresdefault.jpg" class="slide-page">
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
body{
    overflow-x: hidden;
}
.main-slides{
    width: 100vw;
}

.slide-page{
    height: 600px;
}


@media screen and (max-width: 1368px){
  .slide-page{
    height: 450px;
  }
}

@media screen and (max-width: 580px){
  .slide-page{
    height: 200px;
  }
}
</style>
