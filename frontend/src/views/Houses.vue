<template>
  <div class="houses-page">
    <SearchBar />
    <div class="houses" v-if="ready">
      <h3 class="houses-title">Catálogo de Imóveis</h3>
      <div class="house-cards-content" v-if="ready">
        <div
          class="house-cards"
          v-for="house in filteredHouses"
          :key="house.id"
          @click="HousePage(house)"
        >
          <img :src="house.img" alt="Imagem do imóvel" />
          <span class="card-price">R$ {{house.price}}</span>
          <span class="card-type">{{house.type}}</span>
          <span class="card-description">{{house.description}}</span>
        </div>
      </div>
      <div class="arrows">
        <small>
          <i class="fas fa-caret-left"></i> anterior
        </small>
        <small>
          proximo
          <i class="fas fa-caret-right"></i>
        </small>
      </div>
    </div>
    <div class="wpp-area">
      <img src="../assets/imgs/whatsapp.png" alt />
      <div class="wpp-text">
        <h3>VOCÊ AGORA TEM MUITO MAIS FACILIDADE PARA CONVERSAR COM A GENTE!</h3>
        <h3>INICIE SEUA ATENDIMENTO PELO WHATSAPP AGORA MESMO!</h3>
        <button class="wpp-btn" @click="wppMessage">BASTA CLICAR AQUI</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseApiUrl from "@/global.js";
import SearchBar from "../components/SearchBar";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      ready: false,
      filteredHouses: []
    };
  },
  methods: {
    wppMessage() {
      window.location.href = `https://api.whatsapp.com/send?phone=5573991371695&text=Ola%21%20Queria%20falar%20sobre%20venda%20ou%20aluguel%20de%20imovel`;
    },
    HousePage(house) {
      this.$store.commit("getHouse", house);
      this.$router.push("casa");
    },
    loadHouses() {
      axios
        .get(`${baseApiUrl}/houses`)
        .then(res => {
          this.$store.state.houses = res.data;
          this.filteredHouses = this.$store.state.houses
        })
        .catch(err => console.log(err));

      this.loadPics();
    },
    loadPics() {
      setTimeout(() => {
        for (let i = 0; i < this.houses.length; i++) {
          axios
            .get(`${baseApiUrl}/housePics/${this.houses[i].id}`)
            .then(res => {
              this.houses[i].img = res.data[0].url;
              this.filterHouses[i].img = this.houses[i].img
              console.log(res.data);
            })
            .catch(err => console.log(err));
        }
      }, 300);

      setTimeout(() => {
        this.ready = true;
        console.log("ready!");
      }, 1500);
    },
    filterHouses(){
      if(this.research.imovel != undefined){
        this.filteredHouses =  this.filteredHouses.filter(house => {
          return house.imovel = this.research.imovel
        })
        /* for(let i = 0; i < this.filteredHouses.length; i++){
          if(this.filteredHouses[i].imovel != this.research.imovel){
            this.filteredHouses.splice(i, 1)
            i--
          }
        } */
      }
      if(this.research.min != undefined && this.research.max != undefined){
        this.filteredHouses = this.filteredHouses.filter(house => {
          return house >= this.research.min && house <= this.research.max
        })
        /* for(let i = 0; i < this.filteredHouses.length; i++){
          if(this.filteredHouses[i].price >= this.research.min || this.filteredHouses[i].price <= this.research.max){
            this.filteredHouses.splice(i, 1)
            i--
          } 
        }*/
      }
      if(this.research.max != undefined){
        this.filteredHouses = this.filterHouses.filter(house => {
          return house <= this.research.max
        })
        /* for(let i = 0; i < this.filteredHouses.length; i++){
          if(this.filteredHouses[i].price <= this.research.max){
            this.filteredHouses.splice(i, 1)
            i--
          }
        } */
      }
      if(this.research.neighborhood != undefined){
        this.filteredHouses = this.filteredHouses.filter(house => {
          return house.neighborhood === this.research.neighborhood
        })
      }
      if(this.research.type != undefined){
        this.filteredHouses = this.filteredHouses.filter(house => {
          return house.type === this.research.transaction
        })
      }
    }
  },
  mounted() {
    this.loadHouses()
    this.filterHouses()
  },
  computed: {
    houses() {
      return this.$store.state.houses
    },
    research(){
        return this.$store.state.research
    }
  }
};
</script>

<style>
.houses {
  background-color: #efefef;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 50px;
}

.houses-title {
  width: 99vw;
  margin-top: 30px;
  font-weight: bold;
  margin-bottom: 50px;
}

.house-cards-content {
  display: flex;
  width: 70vw;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.house-cards {
  width: 340px;
  height: 350px;
  box-shadow: 1px 3px 5px #444;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
}

.house-cards:hover {
  cursor: pointer;
}

.house-cards img {
  width: 100%;
  height: 200px;
}
.card-type,
.card-price {
  width: 48%;
  height: 50px;
  font-family: "Agency FB", arial;
  text-align: center;
  font-size: 25px;
}

.card-type {
  background-color: #ccc;
}

.card-description {
  font-size: 12px;
  height: 90px;
  width: 90%;
  justify-self: center;
  text-align: justify;
}

.arrows {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.arrows small {
  margin: 10px;
  font-family: "Agency FB", arial;
  font-size: 20px;
  color: #888;
}

.wpp-area {
  height: 250px;
  width: 100vw;
  background-color: rgb(0, 150, 136);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.wpp-area img {
  width: 200px;
}

.wpp-text {
  font-family: "Agency FB", arial;
  color: #fff;
}

.wpp-btn {
  border: none;
  padding: 10px 30px;
  background-color: rgb(17, 193, 66);
  color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #444;
  font-size: 20px;
}

@media screen and (max-width: 580px) {
  .wpp-area {
    font-size: 25px;
    height: auto;
    padding: 20px;
  }

  .house-cards {
    width: 100vw;
  }

  .card-description {
    width: 98%;
  }
}
</style>
