<template>
  <div class="auth-box">
    <img src="../assets/logo.png" alt="Logo do site" />
    <hr />
    <b-row class="my-1 mt-5">
      <b-col sm="2">
        <label for="input-default">Login:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" placeholder="Insira sua identificação"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1 mt-5">
      <b-col sm="2">
        <label for="input-default">Senha:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" placeholder="Insira sua senha"></b-form-input>
      </b-col>
    </b-row>
    <b-button variant="info" class="mt-5" @click="movePage">Entrar</b-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            login: '',
            pass: '',
        }
    },
    methods: {
        movePage(){
            this.$store.commit('toggleBtn', true)
            this.$router.push("welcome")
        }
    }

};
</script>

<style>
.auth-box {
  width: 50vw;
  height: 700px;
  display: block;
  flex-wrap: wrap;
  background-color: #eee;
  margin-top: 100px;
  border-radius: 10px;
  box-shadow: 2px 2px 15px #aaa;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.auth-box img {
  width: 170px;
  height: 200px;
  padding: 0;
  margin: 0;
}

.auth-img-box {
  width: 100%;
  height: 200px;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, #f0f0f0, #333, #888, #f0f0f0);
}

.input-width {
  width: 50vw;
}
</style>
