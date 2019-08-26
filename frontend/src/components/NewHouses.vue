<template>
  <div class="new-houses">
    <h3 class="new-houses-title">ÚLTIMOS IMÓVEIS ADICIONADOS:</h3>
    <div class="new-house-cards-content" v-if="ready">
      <div class="new-house-cards" v-for="house in houses" :key="house.id" @click="HousePage(house)">
        <img :src="house.img" alt="Imagem do imóvel">
        <span class="card-price">R$ {{house.price}}</span>
        <span class="card-type">{{house.type}}</span>
        <span class="card-description">{{house.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseApiUrl from '@/global.js'
export default {
  data() {
    return {
      ready: false
    };
  },
  methods: {
    HousePage(house){
        this.$store.commit('getHouse', house)
        this.$router.push("casa")
    },
    loadHouses(){
      axios.get(`${baseApiUrl}/houses`)
        .then(res => {
          this.$store.state.houses = [res.data[res.data.length-1], res.data[res.data.length-2], res.data[res.data.length-3]]
        })
        .catch(err => console.log(err))

        this.loadPics()
    },
    loadPics(){
      setTimeout(() => {
        for(let i = 0; i < this.houses.length; i++){
          axios.get(`${baseApiUrl}/housePics/${this.houses[i].id}`)
            .then(res => this.houses[i].img = res.data[0].url)
            .catch(err => console.log(err))
      }
      },500)

      setTimeout(() => {
        this.ready = true
      }, 1100);

    }
  },
  mounted(){
    this.loadHouses()
  },
  computed: {
    houses() {
      return this.$store.state.houses
    }
  }
}
</script>

<style>
@import url("http://allfont.net/allfont.css?fonts=agency-fb");
    .new-houses{
        height: 600px;
        background-color: #efefef;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .new-houses-title{
        width: 99vw;
        margin-top: 30px;
    }

    .new-house-cards-content{
        display: flex;
        width: 100vw;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .new-house-cards{
        width: 340px;
        height: 350px;
        box-shadow: 1px 3px 5px #444;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .new-house-cards:hover{
        cursor:pointer;
    }

    .new-house-cards img{
        width: 100%;
        height: 200px;
    }
    .card-type,
    .card-price{
        width: 48%;
        height: 50px;
        font-family: "Agency FB", arial;
        text-align: center;
        font-size: 25px;
    }

    .card-type{
        background-color: #ccc;
    }

    .card-description{
        font-size: 12px;
        height: 90px;
        width: 90%;
        justify-self: center;
        text-align: justify;
    }

    @media screen and (max-width: 1368px){
        .new-houses{
            height: auto;
        }

        .new-houses-title{
            font-size: 20px;
        }

        .new-house-cards-content{
            margin: 30px 0;
        }

        .new-house-cards{
            margin: 10px 0;
        }
    }

    @media screen and (max-width: 580px){
        .new-houses{
            height: auto;
        }

        .new-house-cards-content{
            margin: 30px 0;
        }

        .new-house-cards{
            margin: 10px 0;
        }
    }
</style>
