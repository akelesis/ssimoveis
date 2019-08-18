<template>
  <div class="main-nav">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
    </router-link>
    <div class="main-menu">
      <div class="menu-item">
        <router-link to="/about">Sobre Nós</router-link>
      </div>
      <div class="menu-item dropdown">
        <button class="dropbtn">
          Catálogo
          <i class="fa fa-caret-down custom-caret"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/empreendimentos">Empreendimentos</router-link>
          <router-link to="/imoveis">Imóveis</router-link>
        </div>
      </div>
      <div class="menu-item">
        <router-link to="/contato">Fale Conosco</router-link>
      </div>
      <div class="menu-button">
        <a href="http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso" target="blank">Simular Financiamento</a>
      </div>
    </div>
    <div class="main-dropdown-menu dropdown">
      <button class="dropbtn" @click="openMenu()">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="dropdown-content-mobile invisible" id="mobile-menu">
      <router-link v-b-toggle.collapse-1 to="/imoveis">Catálogo</router-link>
      <b-collapse id="collapse-1" class="mt-2 pl-4">
        <router-link to="/empreendimentos">Empreendimentos</router-link>
        <router-link to="/imoveis">Imóveis</router-link>
      </b-collapse>
      <router-link to="/about">Quem Somos</router-link>
      <router-link to="/contato">Contato</router-link>
      <a href="http://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso" target="blank">Simular Financiamento</a>
    </div>

  </div>
</template>

<script>
export default {

  methods: {
    openMenu(){
      if(document.getElementById('mobile-menu').classList.contains('invisible')){
        document.getElementById('mobile-menu').classList.add('visible')
        document.getElementById('mobile-menu').classList.remove('invisible')
      }
      else{
        document.getElementById('mobile-menu').classList.add('invisible')
        document.getElementById('mobile-menu').classList.remove('visible')
      }
      
      
    }
  }
};
</script>

<style>
@import url(http://allfont.net/allfont.css?fonts=agency-fb);
.main-nav {
  background-color: rgb(51, 51, 51);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Agency FB", arial;
}

.logo-img {
  height: 200px;
  margin-left: 150px;
}

.main-dropdown-menu {
  display: none;
}

.main-menu {
  display: flex;
  align-self: flex-end;
  margin-right: 150px;
}

.menu-button{
  color: #fff;
  border: 1px solid #fff;
  margin-left: 20px;
  padding: 0 20px;
  font-size: 25px;
  border-radius: 2px;
  margin-bottom: 5px;
  
}

.menu-button:hover{
  background-color: #fff;
}

.menu-button:hover a{
  color: #444;
  text-decoration: none;
}

.dropdown-content-mobile{
  display: none;
}

.menu-item {
  color: #fff;
  list-style: none;
  display: inline;
  margin-left: 20px;
  font-size: 25px;
  align-self: center;
}

.custom-caret {
  font-size: 15px;
}

.main-menu a {
  color: #fff;
  text-decoration: none;
}

.menu-item a:hover {
  color: #fff;
  text-decoration: none;
}

.menu-item:hover {
  border-bottom: 3px solid white;
}

.dropdown .dropbtn {
  font-size: 25px;
  border: none;
  outline: none;
  color: white;
  padding: 3px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 950px) {
  .menu-item,
  .dropdown .dropbtn {
    font-size: 20px;
  }
  .main-nav {
    height: 100px;
  }
  .logo-img {
    height: 140px;
    margin-left: 50px;
  }
}

@media screen and (max-width: 680px) {
  .main-nav {
    height: 70px;
  }

  .main-menu {
    display: none;
  }

  .main-dropdown-menu {
    display: block;
    margin-right: 50px;
    border: 1px solid #fff;
    border-radius: 5px;
  }

  .invisible{
    display: none;
  }

  .visible{
    display: block;
  }

  .dropdown-content-mobile {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    width: 100vw;
    transform: translateY(140px);
    z-index: 1;
  }

  .dropdown-content-mobile a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    
  }

  .dropdown-content-mobile a:hover {
    background-color: #ddd;
    color: #444;
    text-decoration: none;
  }

  .dropdown:hover .dropdown-content-mobile {
    display: block;
  }
}
</style>
