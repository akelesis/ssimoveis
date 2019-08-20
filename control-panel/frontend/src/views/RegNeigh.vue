<template>
  <div class="reghouses">
    <h1>Cadastro e edição de casas</h1>

    <form action="" class="house-form">
      <div>
        <label for="title">Nome do bairro</label>
        <input type="text" class="input-group" name="title" id="title" v-model="neighborhood.name"/>
      </div>

      <button type="button" class="panel-btn" @click="saveHouse">Salvar</button>
    </form>
    

    <div class="houses-box">

    </div>

  </div>
</template>

<script>
import baseApiUrl from '@/global'
import axios from 'axios'
export default {
  data(){
    return{
      neighborhood: {},
    }
  },

  methods: {
    saveHouse(){
      axios.post(`${baseApiUrl}/neighborhood`, this.neighborhood)
        .then(() => alert('Bairro cadastrado com sucesso!'))
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>

<style>
.reghouses{
  display:flex;
  flex-wrap: wrap;
  margin-top: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  justify-content: center;
}

.input-group{
  width: 28vw;
}

.reghouses h1{
  width: 100%;
}

.house-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60vw;
  margin-top: 50px;
}

.house-form select{
  width: 100%;
}

.description-area{
  width: 70vw;
}

#house-description{
  width: 100%;
  height: 50px;
}
#house-img-upload{
  width: 100%;
}

.houses-box{
  height: 500px;
  width: 60vw;
  margin-top: 50px;
  background-color: #fff;
  border: 1px solid #444;
}

.panel-btn{
  border:none;
  border-radius: 10px;
  width: 300px;
  height: 30px;
  margin-top: 30px;
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
  color: #fff;
}

.panel-btn:hover{
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #38ef7d,
    #11998e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #38ef7d,
    #11998e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

@media screen and (max-width: 550px){
  .input-group{
    width: 70vw;
  }

  .description-area{
    width: 100vw;
  }
}
</style>

