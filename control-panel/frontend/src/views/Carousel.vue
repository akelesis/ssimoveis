<template>
  <div class="reghouses">
    <h1>Cadastro e edição de bairros</h1>

    <form action="" class="house-form">
       <div class="input-group">
        <label for="title">Titulo da Imagem</label>
        <input type="text" class="input-group" name="title" id="title" v-model="carousel.title"/>
      </div>

      <div class="input-group description-area">
        <label for="house-description" class="mt-3">Descrição</label>
        <textarea name="description" id="house-description" cols="30" rows="5" class="mb-5"  v-model="carousel.description"></textarea>
      </div>
      <div class="input-group">
        <label for="house-img-upload" class="mt-3">Selecione as imagens</label>
        <input type="file" name="imgs" id="imgs" @change="SaveImg">
      </div>

      <button type="button" class="panel-btn" @click="SavePage">Salvar</button>
    </form>

    <div class="carousel-box">
      <div id="list">
          <h4 class="mt-3">Slides:</h4>
          <b-table hover striped :items="imgs" :fields="fields">
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
import axios from 'axios'
import baseApiUrl from '@/global.js'
export default {
  data(){
    return{
      imgs: [],
      carousel: {},
      pic: '',
      fields:[
        {key: "id", label: "código", sortable: true},
        {key: "title", label: "Título", sortable: true},
        {key: "description", label: "Descrição", sortable: false},
        {key: "actions", label: "Ações"},
      ],
    }
  },
  methods: {
    SaveImg(event){
      const fd = new FormData();
      let img = event.target.files[0]
      fd.append("carousel", img)
      console.log('entrou aqui')
    
      axios
        .post(`${baseApiUrl}/uploads`, fd)
        .then(resp => {
          this.pic = baseApiUrl + '/' + resp.data
          console.log('img salva!')
        })
        .catch(err => alert(err));
    },
    SavePage(){
      this.carousel.url = this.pic

      axios.post(`${baseApiUrl}/carousel`, this.carousel)
        .then(() => console.log('Gravação bem sucedida'))
        .catch(err => console.log(err))
    },
    getImgs(){
      axios.get(`${baseApiUrl}/carousel`)
        .then(res => this.imgs = res.data)
        .catch(err => console.log(err))
    }
  },
  mounted(){
    this.getImgs()
  }
}
</script>

<style>
.carousel-box{
  height: 500px;
  width: 60vw;
  margin-top: 50px;
  background-color: #fff;
  border: 1px solid #444;
  overflow: hidden;
  overflow-y: visible;
}
</style>