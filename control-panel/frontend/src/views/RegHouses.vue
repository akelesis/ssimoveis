<template>
  <div class="reghouses">
    <h1>Cadastro e edição de casas</h1>

    <form method="post" enctype="multipart/form-data" class="house-form" action="/">
      <div class="input-group">
        <label for="title">Titulo da casa</label>
        <input type="text" class="input-group" name="title" id="title" v-model="houseInfo.title"/>
      </div>

      <div class="input-group">
        <label for="type" class="mt-1">Tipo de transação</label>
        <select name="type" id="type" v-model="houseInfo.transaction">
          <option value="">Selecione o tipo</option>
          <option value="venda">Venda</option>
          <option value="Aluguel">Aluguel</option>
        </select>
      </div>
      <div class="input-group">
        <label for="type" class="mt-1">Tipo do imovel</label>
        <select name="type" id="type" v-model="houseInfo.type">
          <option value="">Selecione o tipo</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Terreno">Terreno</option>
        </select>
      </div>
      <div class="input-group">
        <label for="type" class="mt-1">Área do imóvel</label>
        <select name="type" id="type" v-model="houseInfo.area">
          <option value="" selected>Selecione a área</option>
          <option value="Zona Rural">Zona Rural</option>
          <option value="Urbano">Urbano</option>
        </select>
      </div>
      <div class="input-group">
        <label for="value" class="mt-1">Valor</label>
        <input type="number" min=0 class="input-group" name="value" id="value" v-model="houseInfo.price"/>
      </div>
      <div class="input-group">
        <label for="owner" class="mt-1">selecione o proprietário</label>
        <select name="owner" id="owner" v-model="client">
          <option value="" selected>Selecione</option>
          <option v-for="client in clients" :value="client.id" :key="client.id">{{client.name}}</option>
        </select>
      </div>
      <div class="input-group">
        <label for="neighborhood" class="mt-1">selecione o bairro</label>
        <select name="neighborhood" id="neighborhood" v-model="neighborhood">
          <option value="" selected>Selecione</option>
          <option v-for="neighborhood in neighborhoods" :value="neighborhood.id" :key="neighborhood.id">{{neighborhood.name}}</option>
        </select>
      </div>
      <div class="input-group description-area">
        <label for="house-description" class="mt-3">Descrição</label>
        <textarea name="description" id="house-description" cols="30" rows="5" v-model="houseInfo.description"></textarea>
      </div>
      <div class="input-group">
        <label for="house-img-upload" class="mt-3">Selecione as imagens</label>
        <input type="file" name="imgs" id="imgs" @change="getPics" multiple>
      </div>
      <button type="button" class="panel-btn" @click="saveHouse">Salvar</button>
    </form>
    

    <div class="houses-box">
      <div id="list">
          <h4 class="mt-3">Imóveis:</h4>
          <b-table hover striped :items="houses" :fields="fields">
            <template slot="actions" slot-scope="data">
              <b-button variant="warning" @click="loadHouse(data.item)" class="mr-2">
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button variant="danger" @click="removeHouse(data.item)" class="mr-2">
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
      houseInfo: {},
      clients: [],
      client: '',
      neighborhoods: [],
      neighborhood: '',
      pics: [],
      houseId: '',
      fields:[
        {key: "id", label: "código", sortable: true},
        {key: "title", label: "Imóvel", sortable: true},
        {key: "transaction", label: "Transação", sortable: false},
        {key: "actions", label: "Ações"},
      ],
      houses: []
    }
  },

  methods: {
    reset(){
      this.houseInfo = {}
    },

    saveHouse(){
      const picsInfo = new Array()
      this.houseInfo.price = parseFloat(this.houseInfo.price)

      this.houseInfo.idClient = this.client
      this.houseInfo.neighborhood = this.neighborhood

      axios.post(`${baseApiUrl}/houses`, this.houseInfo)
        .then(res => {
          this.houseId = res.data[0]
        })
        .catch(err => {
          console.log(err)
        })

      for(let i = 0; i < this.pics.length; i++){
        console.log(this.houseId)
        picsInfo.push({idHouse: this.houseId, url: this.pics[i]});
      }

      axios.post(`${baseApiUrl}/housePics`, picsInfo)
        .then(() => console.log('Imagens salvas no banco de dados'))
        .catch(err => console.log(err))

      this.houses = []
      this.loadHouses()
      this.reset()

    },

    loadNeigh() {
      const url = `${baseApiUrl}/neighborhood`;
      axios.get(url).then(res => {
        this.neighborhoods = res.data;
      });
    },
    loadClients() {
      const url = `${baseApiUrl}/clients`;
      axios.get(url).then(res => {
        this.clients = res.data;
      });
    },

    getPics(event) {
      const fd = new FormData();

      for(let i = 0; i < event.target.files.length; i++){
        let img = event.target.files[i]
        fd.append("imgs"+i, img)
        
      }

      axios
        .post(`${baseApiUrl}/uploads`, fd)
        .then(resp => {
          for(let i = 0; i < resp.data.length; i++){
            this.pics[i] = baseApiUrl + '/' + resp.data[i]
          }
        })
        .catch(err => alert(err));
    },
    loadHouses(){
      const url = `${baseApiUrl}/houses`;
      axios.get(url).then(res => {
        this.houses = res.data;
      });
    },
    loadHouse(house){
      this.houseInfo = { ...house }
    },
    removeHouse(house){
      axios.delete(`${baseApiUrl}/housePics/${house.id}`)
        .then(() => console.log('fotos apagadas'))
        .catch(err => console.log(err))

      axios.delete(`${baseApiUrl}/houses/${house.id}`)
        .then(() => console.log('Casa removida'))
        .catch(err => console.log(err))

      this.houses = []
      this.loadHouses()

    }

  },
  mounted(){
    this.loadNeigh(),
    this.loadClients(),
    this.loadHouses()
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

