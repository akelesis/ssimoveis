<template>
  <div class="about">
    <Banner />
    <div class="about-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui. Nunc consequat 
      interdum varius sit amet mattis vulputate enim nulla. Eget lorem dolor sed viverra ipsum 
      nunc aliquet bibendum enim. Congue nisi vitae suscipit tellus mauris a. Maecenas pharetra 
      convallis posuere morbi leo urna molestie at elementum. Fames ac turpis egestas maecenas. 
      Convallis posuere morbi leo urna. Non quam lacus suspendisse faucibus. A diam sollicitudin 
      tempor id eu nisl. Vitae tempus quam pellentesque nec nam aliquam sem et. In tellus integer 
      feugiat scelerisque varius morbi enim. Non nisi est sit amet. Cras fermentum odio eu feugiat 
      pretium nibh ipsum consequat nisl. Cursus eget nunc scelerisque viverra mauris in. At augue 
      eget arcu dictum. Tortor pretium viverra suspendisse potenti. Mauris in aliquam sem fringilla.</p>
      <p>
        Tempus egestas sed sed risus pretium quam. Eget duis at tellus at urna condimentum mattis pellentesque id. 
        Tortor condimentum lacinia quis vel eros donec ac. Fames ac turpis egestas maecenas pharetra. 
        Aliquam etiam erat velit scelerisque in dictum non. Felis donec et odio pellentesque diam volutpat 
        commodo sed. Malesuada bibendum arcu vitae elementum. Mauris cursus mattis molestie a iaculis at erat pellentesque. 
        Nisl rhoncus mattis rhoncus urna neque. Viverra mauris in aliquam sem fringilla. Nullam eget felis eget nunc lobortis.
        Adipiscing diam donec adipiscing tristique. Gravida rutrum quisque non tellus orci ac auctor augue.
      </p>
    </div>
  </div>
</template>

<script>
import Banner from "../components/about/Banner"
export default {
  name: "about",
  components: {
    Banner,
  }
}
</script>

<style>
  .about{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about-text{
    width: 50vw;
    margin: 100px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-self: center;
  }

  .about-text p{
    text-align: justify;
  }

  @media screen and (max-width: 580px){
    .about-text{
      width: 80vw;
      margin: 20px 0;
    }
  }
</style>

