<template>
    <div class="contact-page">
        <h3 class="contact-title">Fale Conosco!</h3>
        <form action="" class="contact-form">
            <div class="contact-fields">
                <input class="input-field" type="text" placeholder="Seu nome" v-model="contact.name"/>
                <input class="input-field" type="text" placeholder="Seu melhor email" v-model="contact.email"/>
            </div>
            <div class="contact-fields">
                <input class="input-field" type="text" placeholder="Seu número para contato" v-model="contact.tel"/>
                <input class="input-field" type="text" placeholder="Assunto que deseja tratar" v-model="contact.subject"/>
            </div>
            <div class="contact-fields">
                <textarea name="contact-message" id="contact-message" cols="30" rows="10" v-model="contact.message"></textarea>
            </div>
            <button type="button" class="wpp-btn" @click="sendMail">ENVIAR!</button>
        </form>
        
    </div>
</template>

<script>
import axios from "axios"
import baseApiUrl from "@/global.js"
export default {
    data(){
        return{
            contact: {}
        }
    },
    methods: {
        sendMail(){
            axios.post(`${baseApiUrl}/mail`, this.contact)
                .then(() => {
                    alert("Mensagem enviada com sucesso!")
                    this.contact = {}
                })
        }
    }
}
</script>

<style>
@import url("http://allfont.net/allfont.css?fonts=agency-fb");
   .contact-page{
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       font-family: "Agency FB", arial;
       height: 80vh;
   }

   .contact-title{
        width: 100vw;
        font-weight: bold;
        margin-top: 50px;
   }

   .contact-form{
       width: 70vw;
   }

   .contact-fields{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       margin-top: 50px;
       margin-bottom: 50px;
   }

   .input-field{
       width: 30vw;
       height: 40px;
       font-size: 25px;
       border: none;
       border-bottom: 3px solid #777;
   }

   #contact-message{
       width: 65vw;
       border: 1px solid #444;
   }

   .wpp-btn{
       border: none;
       height: 50px;
       width: 150px;
       border-radius: 5px;
       color: #fff;
       font-size: 30px;
       background-color: rgb(16, 193, 66);
   }

   .wpp-btn:hover{
       background-color: rgb(22,213,133);
   }

   @media screen and (max-width: 580px){
       .contact-page{
           height: auto;
       }

       .input-field{
           width: 95vw;
       }

       .input-fields{
           margin-top: 0;
       }
   }

</style>
