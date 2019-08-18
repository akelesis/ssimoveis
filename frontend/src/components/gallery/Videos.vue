<template>
  <div class="videos-gallery">
    <h3 class="title-video-gallery">Videos:</h3>
    <div class="video-gallery">
      <iframe width="420" height="315" src="https://www.youtube.com/embed/b645nF89D9A"></iframe>
    </div>
    <div class="video-gallery">
      <iframe width="420" height="315" src="https://www.youtube.com/embed/z4VnbL9v9Bc"></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.videos-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.title-video-gallery {
  width: 100vw;
  margin: 50px 0;
}

.video-gallery {
  width: 400px;
  height: 300px;
}

.video-gallery img {
  width: 100%;
}
</style>
