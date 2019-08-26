<template>
  <div class="regnews">
    <h1>Cadastro e edição Notícias</h1>

    <form action="" class="news-form">
      <div class="input-group">
        <label for="title">Titulo da Notícia</label>
        <input type="text" class="input-group" name="title" id="news-title"/>
      </div>

      <div class="input-group">
        <label for="news-link">Link da Notícia</label>
        <input type="text" class="input-group" name="link" v-model="news.link" id="news-link"/>
      </div>

      <div class="input-group">
        <label for="news-img-upload" class="mt-3">Selecione a imagem</label>
        <input type="file" name="img" @change="SaveImg()" id="news-img-upload">
      </div>

      <div class="input-group description-area">
        <label for="news-description" class="mt-3">Descrição</label>
        <textarea name="description" v-model="news.description" id="news-description" cols="30" rows="5"></textarea>
      </div>
      
      <button type="button" class="panel-btn" @click="SaveNews()">Salvar</button>
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
      news: {},
      archive: [],
      fields:[
        {key: "id", label: "código", sortable: true},
        {key: "title", label: "Noticia", sortable: true},
        {key: "actions", label: "Ações"},
      ],
      pic: '',
      newsId: ''
    }
  },
  methods: {
    reset(){
      this.news = {}
    },
    SaveImg(){
      const fd = new FormData();
      let img = event.target.files[0]
      fd.append("news", img)
    
      axios
        .post(`${baseApiUrl}/uploads`, fd)
        .then(resp => {
          this.pic = baseApiUrl + '/' + resp.data
        })
        .catch(err => alert(err));
    },
    SaveNews(){
      this.news.date = '2019-08-22'
      axios.post(`${baseApiUrl}/news`, this.news)
        .then(res => {
          this.newsId = res.data[0]

          const picsInfo = new Array()
          picsInfo.push({idNews: this.newsId, url: this.pic});

          axios.post(`${baseApiUrl}/newsPics`, picsInfo)
            .then(() => alert('Noticia salva no banco de dados'))
            .catch(err => console.log("não foi possível salvar, erro: " + err))
        })
        .catch(err => {
          console.log(err)
        })
        

      this.actions = []
      this.loadNews()
      this.reset()
    },
    loadNews(){
      const url = `${baseApiUrl}/news`;
      axios.get(url).then(res => {
        this.archive = res.data;
      });
    },
    loadTheNews(){
      this.news = {...action}
    }
  }

};
</script>

<style>
.regnews{
  display:flex;
  flex-wrap: wrap;
  margin-top: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  justify-content: center;
}

.news-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60vw;
  margin-top: 50px;
}

.news-form select{
  width: 100%;
}

#news-description{
  width: 100%;
  height: 50px;
}
#news-img-upload{
  width: 100%;
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
