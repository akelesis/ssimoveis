<template>
  <div class="main-menu" v-show="menuVisibility==true">
    <div class="title-menu">
      <div class="img-box">
        <img src="../../assets/logo.png" alt="Logo do site" />
      </div>
      <h3 class="pt-3">Painel de controle</h3>
    </div>
    <router-link to="/regclient" class="menu-link">
      <div class="menu-item">Clientes</div>
    </router-link>
    <router-link to="/regneigh" class="menu-link">
      <div class="menu-item">Bairros</div>
    </router-link>
    <router-link to="/reghouses" class="menu-link">
      <div class="menu-item">Imóveis</div>
    </router-link>
    <router-link to="/regaction" class="menu-link">
      <div class="menu-item">Empreendimentos</div>
    </router-link>
    <router-link to="/regnews" class="menu-link">
      <div class="menu-item">Notícias</div>
    </router-link>
    <router-link to="/carousel" class="menu-link">
      <div class="menu-item">Carrossel</div>
    </router-link>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "nav-menu",
    data(){
        return {}
    },
    computed: mapState(['menuVisibility'])
};
</script>

<style>
@import url("http://allfont.net/allfont.css?fonts=agency-fb");
.main-menu {
  grid-area: menu;
  width: 300px;
  height: 120vh;
  background: #ECE9E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: "Agency FB", arial;
  display: flex;
  flex-direction: column;
}

.title-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.img-box {
  width: 70px;
}

.img-box img {
  width: 100%;
}

.menu-item {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 25px;
  border-top: 1px solid #777;
  border-bottom: 1px solid #777;
}

.menu-link {
  color: #444;
}

.menu-item:hover {
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #11998e,
    #38ef7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #11998e,
    #38ef7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.menu-link:hover {
  color: #fff;
  text-decoration: none;
}


</style>
