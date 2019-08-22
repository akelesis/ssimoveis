<template>
  <div class="reghouses">
    <h1>Cadastro e edição de casas</h1>

    <form action="" class="house-form">
      <div class="input-group">
        <label for="title">Titulo do Empreendimento</label>
        <input type="text" class="input-group" name="title" id="title" v-model="action.title"/>
      </div>

      <div class="input-group description-area">
        <label for="house-description" class="mt-3">Descrição</label>
        <textarea name="description" id="house-description" cols="30" rows="5" class="mb-5"  v-model="action.description"></textarea>
      </div>
      <div class="input-group">
        <label for="main-img-upload" class="mt-2">Selecione a imagem principal</label>
        <input type="file" name="main-img" id="main-img-upload" @change="getMainImg">
      </div>
      <div class="input-group">
        <label for="imgs-upload" class="mt-2">Selecione as demais imagens</label>
        <input type="file" name="imgs" id="imgs-upload" @change="getImgs" multiple>
      </div>
      <button type="button" class="panel-btn" @click="saveAction">Salvar</button>
    </form>
    

    <div class="houses-box">
      <div id="list">
          <h4 class="mt-3">Imóveis:</h4>
          <b-table hover striped :items="actions" :fields="fields">
            <template slot="actions" slot-scope="data">
              <b-button variant="warning" @click="loadAction(data.item)" class="mr-2">
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button variant="danger" @click="removeAction(data.item)" class="mr-2">
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
      action: {},
      pics: [],
      actions: [],
      actionId: '',
      fields:[
        {key: "id", label: "Código", sortable: true},
        {key: "title", label: "Empreendimento", sortable: true},
        {key: "actions", label: "Ações"},
      ],

    }
  },

  methods: {
    reset(){
      this.action = {}
    },

    saveAction(){
      const picsInfo = new Array()

      console.log(this.action.mainPic)

      axios.post(`${baseApiUrl}/actions`, this.action)
        .then(res => {
          this.actionId = res.data[0]
          for(let i = 0; i < this.pics.length; i++){
            console.log("teste: " + this.actionId)
            picsInfo.push({idAction: this.actionId, url: this.pics[i]});
          }
          axios.post(`${baseApiUrl}/actionPics`, picsInfo)
              .then(() => console.log('Imagens salvas no banco de dados'))
              .catch(err => console.log(err))
        })
        .catch(err => {
          console.log(err)
        })

        

      

      this.actions = []
      this.loadActions()
      this.reset()

      
      
    },
    getImgs(event) {
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
            console.log(this.pics[i])
          }
        })
        .catch(err => alert(err));
    },
    getMainImg(event) {
      const fd = new FormData();
      let img = event.target.files[0]
      fd.append("action", img)
    
      axios
        .post(`${baseApiUrl}/uploads`, fd)
        .then(resp => {
          this.action.mainPic = baseApiUrl + '/' + resp.data
        })
        .catch(err => alert(err));
        
    },
    loadActions(){
      const url = `${baseApiUrl}/actions`;
      axios.get(url).then(res => {
        this.actions = res.data;
      });
    },
  },
  mounted(){
    this.loadActions()
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

