<template>
    <div class="news-preview">
        <h3 class="news-title">ÚLTIMAS NOTÍCIAS:</h3>
        <div class="news-container">
            <div class="news-card" v-for="n in news" :key="n.id">
                <img :src="n.pic" alt="Foto da noticia">
                <span class="news-sub">
                    {{n.date}}<br/>
                    {{n.news}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            news: [
                {id: 1, pic: "./imgs/indice.jpg", news: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore", date: "11/05/2019"},
                {id: 2, pic: "./imgs/apt02.jpg", news: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore", date: "15/06/2019"},
                {id: 3, pic: "./imgs/apt03.jpg", news: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore", date: "05/07/2019"}
            ]
        }
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
