<template>
  <div class="reghouses">
    <h1>Cadastro e edição de bairros</h1>

    <form action="" class="house-form">
      <div>
        <label for="title">Nome do bairro</label>
        <input type="text" class="input-group" name="title" id="title" v-model="neighborhood.name"/>
      </div>

      <button type="button" class="panel-btn" @click="saveNeigh">Salvar</button>
    </form>
    

    <div class="neighborhood-box">
      <div id="list">
          <h4 class="mt-3">Bairros:</h4>
          <b-table hover striped :items="neighborhoods" :fields="fields">
            <template slot="actions" slot-scope="data">
              <b-button variant="warning" @click="loadNeigh(data.item)" class="mr-2">
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button variant="danger" @click="removeNeigh(data.item)" class="mr-2">
                <i class="fas fa-trash"></i>
              </b-button>
            </template>
          </b-table>
        </div>
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
      fields:[
        {key: "id", label: "código", sortable: true},
        {key: "name", label: "Bairro", sortable: true},
        {key: "actions", label: "Ações"},
      ],
      neighborhoods: []
    }
  },

  methods: {
    saveNeigh(){
      axios.post(`${baseApiUrl}/neighborhood`, this.neighborhood)
        .then(() => alert('Bairro cadastrado com sucesso!'))
        .catch(err => {
          alert(err)
        })
    },
    loadNeighs() {
      const url = `${baseApiUrl}/neighborhood`;
      axios.get(url).then(res => {
        this.neighborhoods = res.data;
      });
    },
    loadNeigh(neigh){
      this.neighborhood = { ...neigh }
    },
    removeNeigh(neigh){
      axios.delete(`${baseApiUrl}/neigh/${neigh.id}`)
        .then(() => console.log('Bairro removido'))
        .catch(err => console.log(err))

      this.neighborhoods = []
      this.loadNeigh()

    }
  },
  mounted(){
    this.loadNeighs()
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

.neighborhood-box{
  height: 500px;
  width: 60vw;
  margin-top: 50px;
  background-color: #fff;
  border: 1px solid #444;
  overflow: hidden;
  overflow-y: visible;
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

