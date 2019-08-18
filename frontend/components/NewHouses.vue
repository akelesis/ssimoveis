<template>
  <div class="new-houses">
    <h3 class="new-houses-title">ÚLTIMOS IMÓVEIS ADICIONADOS:</h3>
    <div class="new-house-cards-content">
      <div class="new-house-cards" v-for="house in houses" :key="house.id" @click="HousePage()">
        <img :src="house.pic" alt />
        <span class="card-price">R$ {{house.price}}</span>
        <span class="card-type">{{house.type}}</span>
        <span class="card-description">{{house.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houses: [
        {
          id: 1,
          price: 1750.0,
          type: "Aluguel",
          description:
            "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.",
          pic: "./imgs/apt01.jpg"
        },
        {
          id: 2,
          price: 125000.0,
          type: "Venda",
          description:
            "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.",
          pic: "./imgs/apt02.jpg"
        },
        {
          id: 4,
          price: 75000.0,
          type: "Venda",
          description:
            "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.",
          pic: "./imgs/apt03.jpg"
        }
      ]
    };
  },
  methods: {
    getImg(path) {
      return require(path);
    },
    HousePage(){
        this.$router.push("casa")
    }
  }
};
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
