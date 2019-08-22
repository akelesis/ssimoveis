<template>
  <div class="reghouses">
    <h1>Cadastro e edição de Clientes</h1>

    <form action="" class="house-form">
      <div class="input-group">
        <label for="owner" class="mt-1">Nome do cliente</label>
        <input type="text" class="input-group" name="owner" id="owner" v-model="clientInfo.name"/>
      </div>
      <div class="input-group">
        <label for="email-owner" class="mt-1">Email do cliente</label>
        <input type="email" class="input-group" name="email-owner" id="email-owner" v-model="clientInfo.email" />
      </div>
      <div class="input-group">
        <label for="cel-owner" class="mt-1">Telefone do cliente</label>
        <input type="text" class="input-group" name="cel-owner" id="cel-owner" v-model="clientInfo.telephone" />
      </div>
      <button type="button" class="panel-btn" @click="saveClient">Salvar</button>
    </form>
    

    <div class="clients-box">
      <div id="list">
          <h4 class="mt-3">Bairros:</h4>
          <b-table hover striped :items="clients" :fields="fields">
            <template slot="actions" slot-scope="data">
              <b-button variant="warning" @click="loadClient(data.item)" class="mr-2">
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button variant="danger" @click="removeClient(data.item)" class="mr-2">
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
      clientInfo: {},
      neighborhood: {},
      clients: [],
      fields:[
        {key: "id", label: "código", sortable: true},
        {key: "name", label: "Nome", sortable: true},
        {key: "email", label: "Email", sortable: false},
        {key: "actions", label: "Ações"},
      ],
    }
  },

  methods: {
    saveClient(){
      axios.post(`${baseApiUrl}/clients`, this.clientInfo)
        .then(() => alert('Cliente cadastrado com sucesso!'))
        .catch(err => {
          alert(err)
        })

      this.clients = []
      this.loadClients()
    },
    loadClients() {
      const url = `${baseApiUrl}/clients`;
      axios.get(url).then(res => {
        this.clients = res.data;
      });
    },
    loadClient(client){
      this.clientInfo = { ...client }
    },
    removeClient(client){
      axios.delete(`${baseApiUrl}/clients/${client.id}`)
        .then(() => console.log('Bairro removido'))
        .catch(err => console.log(err))

      this.clients = []
      this.loadClients()

    }
  },
   mounted(){
    this.loadClients()
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

.clients-box{
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

