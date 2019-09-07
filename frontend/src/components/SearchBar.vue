<template>
  <div class="search-bar">
    <h1 class="search-header">ENCONTRE AQUI SEU NOVO LAR!</h1>
    <div class="search-group">
      <select name="imovel" id="imovel" class="search-select" v-model="research.imovel">
        <option value>TIPO DE IMOVEL</option>
        <option value="Casa">Casa</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Urbano">Terreno Urbano</option>
        <option value="Zona Rural">Terreno Rural</option>
      </select>

      <label for="faixa-menor" class="search-label">FAIXA DE PREÇO:</label>
      <input type="text" name="faixa-menor" id="faixa-menor" placeholder="DE:" class="search-form" v-model="research.min" />
      <input type="text" name="faixa-maior" id="faixa-maior" placeholder="ATÉ:" class="search-form" v-model="research.max" />

      <select name="bairro" id="bairro" class="search-select" v-model="research.neighborhood">
        <option value>BAIRRO</option>
        <option
          v-for="neighborhood in neighborhoods"
          :value="neighborhood"
          :key="neighborhood.id"
        >{{neighborhood.value}}</option>
      </select>

      <select name="modalidade" id="modalidade" class="search-select" v-model="research.transaction">
        <option
          v-for="transaction in transactionOpts"
          :value="transaction"
          :key="transaction.id"
        >{{transaction.value}}</option>
      </select>

      <button class="btn-search" @click="Research()">Pesquisar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: "",
      transactionOpts: [{ id: 1, value: "Aluguel" }, { id: 2, value: "Venda" }],
      neighborhood: "",
      neighborhoods: [
        { id: 1, value: "Alto Maron" },
        { id: 2, value: "Ayrton Senna" },
        { id: 3, value: "Brasil" }
      ]
    };
  },
  methods: {
    Research(){
      console.log({...this.research})
      this.$router.push({path: '/imoveis'})
    }
  },
  computed: {
    research(){
      return this.$store.state.research
    }
  }
};
</script>

<style>
@import url("http://allfont.net/allfont.css?fonts=agency-fb");

.search-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 150px;
  width: 100vw;
  background-color: rgb(64, 162, 62);
  position: relative;
  align-items: center;
  justify-content: center;
}

.search-header {
  width: 98vw;
  font-family: "Agency FB", arial;
  font-size: 30px;
  color: #fff;
}

.search-select {
  border: none;
  border-bottom: 3px solid black;
  font-size: 25px;
  font-family: "Agency FB", arial;
  padding-right: 100px;
  color: #777;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: white;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  margin-right: 1rem;
}

.search-label {
  font-size: 25px;
  font-family: "Agency FB", arial;
  color: #fff;
  margin-right: 5px;
}

.search-form {
  border: none;
  border-bottom: 3px solid black;
  font-size: 25px;
  font-family: "Agency FB", arial;
  width: 100px;
  color: #777;
}

#faixa-maior {
  margin-left: 2px;
  margin-right: 15px;
}

.btn-search {
  border: none;
  border-radius: 5px;
  color: #777;
  height: 35px;
  width: 100px;
  /* font-family: "Agency FB", arial; */
}

.btn-search:hover {
  background-color: #777;
  color: #fff;
}

@media screen and (max-width: 1368px) {
  .search-bar {
    height: auto;
  }
}

@media screen and (max-width: 580px) {
  .search-bar {
    height: auto;
    padding: 10px 0;
  }

  .search-select{
    width: 95vw;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .btn-search{
    margin-top:10px;
  }
}
</style>
