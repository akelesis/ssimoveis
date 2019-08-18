<template>
  <div id="app" :class="{'hide-menu':!menuVisibility}">
    <Menu/>
    <Content />
  </div>
</template>

<script>
import Menu from './components/templates/Menu'
import Content from './components/templates/Content'
import {mapState} from 'vuex'

export default {
  name: "app",
  components: {
    Menu, 
    Content
  },
  computed: {
    ...mapState(['menuVisibility', 'loggedIn']),
  }
}
</script>

<style>
#app {
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 1fr;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "menu content";
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#app.hide-menu{
  grid-template-areas: "content content";
}
</style>
