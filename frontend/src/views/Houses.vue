<template>
    <div class="houses-page">
        <SearchBar />
        <div class="houses">
            <h3 class="houses-title">Catálogo de Imóveis</h3>
            <div class="house-cards-content">
                <div class="house-cards" v-for="house in houses" :key="house.id" @click="HousePage()">
                    <img :src="house.pic" alt=""/>
                    <span class="card-price">R$ {{house.price}}</span>
                    <span class="card-type">{{house.type}}</span>
                    <span class="card-description">{{house.description}}</span>
                </div>
            </div>
            <div class="arrows">
                <small><i class="fas fa-caret-left"></i> anterior</small>
                <small>proximo <i class="fas fa-caret-right"></i></small>
            </div>
        </div>
        <div class="wpp-area">
            <img src="../assets/imgs/whatsapp.png" alt="">
            <div class="wpp-text">
                <h3>VOCÊ AGORA TEM MUITO MAIS FACILIDADE PARA CONVERSAR COM A GENTE!</h3>
                <h3>INICIE SEUA ATENDIMENTO PELO WHATSAPP AGORA MESMO!</h3>
                <button class="wpp-btn" @click="wppMessage">BASTA CLICAR AQUI</button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
export default {
    components: {
        SearchBar
    },
    data(){
        return{
            houses:[
                {id:1, price: 1750.00, type: "Aluguel", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt01.jpg"},
                {id:2, price: 125000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt02.jpg"},
                {id:3, price: 75000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt03.jpg"},
                {id:4, price: 1750.00, type: "Aluguel", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt04.jpg"},
                {id:5, price: 125000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt05.jpg"},
                {id:6, price: 75000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt06.jpg"},
                {id:7, price: 1750.00, type: "Aluguel", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt07.jpg"},
                {id:8, price: 125000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt08.jpg"},
                {id:9, price: 75000.00, type: "Venda", description: "Em cima de Rubens bar, não faz barulho, 3 escadas, dois quartos, sala, área de serviço, cozinha, banheiro, não tem garagem, mas possui garagens particulares nas proximidades, próximo a mercados, lanches, centro de Vitória da Conquista.", pic:"./imgs/apt03.jpg"}
            ]
        }
    },
    methods:{
        HousePage(){
            this.$router.push("casa")
        },
        wppMessage(){
            window.location.href = `https://api.whatsapp.com/send?phone=5573991371695&text=Ola%21%20Queria%20falar%20sobre%20venda%20ou%20aluguel%20de%20imovel`
            
        }
    }
}
</script>

<style>
    .houses{
        background-color: #efefef;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 50px;
    }

    .houses-title{
        width: 99vw;
        margin-top: 30px;
        font-weight: bold;
        margin-bottom: 50px;
    }

    .house-cards-content{
        display: flex;
        width: 70vw;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .house-cards{
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

    .house-cards:hover{
        cursor:pointer;
    }

    .house-cards img{
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

    .arrows{
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .arrows small{
        margin: 10px;
        font-family: "Agency FB", arial;
        font-size: 20px;
        color: #888;
    }

    .wpp-area{
        height: 250px;
        width: 100vw;
        background-color: rgb(0, 150, 136);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }

    .wpp-area img{
        width: 200px;
    }

    .wpp-text{
        font-family: "Agency FB", arial;
        color: #fff;
    }

    .wpp-btn{
        border: none;
        padding: 10px 30px;
        background-color: rgb(17, 193, 66);
        color: #fff;
        border-radius: 10px;
        box-shadow: 2px 2px 5px #444;
        font-size: 20px;
    }

    @media screen and (max-width: 580px){
        .wpp-area{
            font-size: 25px;
            height: auto;
            padding: 20px;
        }

        .house-cards{
            width: 100vw;
        }

        .card-description{
            width: 98%;
        }
    }
</style>
