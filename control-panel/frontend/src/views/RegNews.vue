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
export default {
  data(){
    return{
      news: {}
    }
  },
  methods: {
    SaveImg(){
      console.log('img saved')
    },
    SaveNews(){
      console.log('news saved')
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
