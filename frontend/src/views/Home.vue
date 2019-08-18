<template>
  <div class="main-content">
    <Carousel />
    <SearchBar />
    <NewHouses />
    <News />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import NewHouses from "../components/NewHouses";
import News from "../components/News";

export default {
  name: "home",
  components: {
    Carousel,
    SearchBar,
    NewHouses,
    News
  }
};
</script>

<style>
/* .main-content {
  height: 1500px;
} */
/* .main-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
} */


</style>

