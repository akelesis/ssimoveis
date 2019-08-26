<template>
    <div class="news-preview">
        <h3 class="news-title">ÚLTIMAS NOTÍCIAS:</h3>
        <div class="news-container" v-if="display">
            <div class="news-card" v-for="n in news" :key="n.id">
                <img :src="n.img" alt="Foto da noticia" @click="goToNews(n.link)">
                <span class="news-sub" @click="goToNews(n)">
                    {{n.date}}<br/>
                    {{n.description}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseApiUrl from '@/global.js'
export default {
    data(){
        return {
            news: [],
            display: false
        }
        
    },
    methods: {
    
    loadNews(){
      axios.get(`${baseApiUrl}/news`)
        .then(res => {
          this.news = [res.data[res.data.length-1], res.data[res.data.length-2], res.data[res.data.length-3]]
          for(let i = 0; i < this.news.length; i++){
              this.news[i].date = this.news[i].date.split('T')
              this.news[i].date = this.news[i].date[0]
          }
        })
        .catch(err => console.log(err))

        this.loadPics()
    },
    loadPics(){
      setTimeout(() => {
        console.log(this.news.length)
        for(let i = 0; i < this.news.length; i++){
          axios.get(`${baseApiUrl}/newsPics/${this.news[i].id}`)
            .then(res => this.news[i].img = res.data.url)
            .catch(err => console.log(err))
      }
      },500)

      setTimeout(() => {
        console.log(this.news)
        this.display = true
      }, 1100);

    },
    goToNews(url){
        console.log({...url})
        alert({...url})
        window.location.href = url
    }
  },
  mounted() {
      this.loadNews()
  }
}
</script>

<style>
@import url("http://allfont.net/allfont.css?fonts=agency-fb");
    .news-preview{
        height: 500px;
    }

    .news-title{
        margin-top: 50px;
    }

    .news-container{
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        margin-top: 50px;
        justify-content: space-evenly;
    }

    .news-card{
        height: 300px;
        width: 450px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .news-card img{
        height: 100%;
        width: 100%;
        border-radius: 20px;
    }

    .news-sub{
        display: flex;
        position: absolute;
        width: 450px;
        height: 100px;
        text-align: justify;
        font-family: "Agency FB", arial;
        font-weight:bold;
        padding: 5px;
        background-color: #fff9;
        align-content: center;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
    }

    
@media screen and (max-width: 1368px){
  .news-preview{
    height: auto;
  }
}

@media screen and (max-width: 580px){
  .news-preview{
    height: auto;
  }

  .news-card{
      margin: 5px 0;
  }

  .news-title{
      font-size: 25px;
  }

  .news-card{
      width: 300px;
  }

  .news-sub{
      width: 300px;
      height: 200px;
  }
}
</style>
