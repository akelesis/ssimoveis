<template>
  <div class="reghouses">
    <h1>Cadastro e edição de casas</h1>

    <form action="" class="house-form">
      <div class="input-group">
        <label for="title">Titulo da casa</label>
        <input type="text" class="input-group" name="title" id="title"/>
      </div>

      <div class="input-group">
        <label for="type" class="mt-1">Tipo de transação</label>
        <select name="type" id="type">
          <option value="">Selecione o tipo</option>
          <option value="venda">Venda</option>
          <option value="Aluguel">Aluguel</option>
        </select>
      </div>
      <div class="input-group">
        <label for="value" class="mt-1">Valor</label>
        <input type="number" min=0 class="input-group" name="value" id="value"/>
      </div>
      <div class="input-group">
        <label for="owner" class="mt-1">Nome do proprietário</label>
        <input type="text" class="input-group" name="owner" id="owner"/>
      </div>
      <div class="input-group">
        <label for="email-owner" class="mt-1">Email do proprietário</label>
        <input type="email" class="input-group" name="email-owner" id="email-owner"/>
      </div>
      <div class="input-group">
        <label for="cel-owner" class="mt-1">Telefone do proprietário</label>
        <input type="text" class="input-group" name="cel-owner" id="cel-owner"/>
      </div>
      <div class="input-group description-area">
        <label for="house-description" class="mt-3">Descrição</label>
        <textarea name="description" id="house-description" cols="30" rows="5"></textarea>
      </div>
      <div class="input-group">
        <label for="house-img-upload" class="mt-3">Selecione as imagens</label>
        <input type="file" name="img" id="house-img-upload" multiple>
      </div>
      <button type="button" class="panel-btn">Salvar</button>
    </form>
    

    <div class="houses-box">

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
}
</script>

<style>
.reghouses{
  display:flex;
  flex-wrap: wrap;
  margin-top: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  justify-content: center;
}

.input-group{
  width: 28vw;
}

.reghouses h1{
  width: 100%;
}

.house-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60vw;
  margin-top: 50px;
}

.house-form select{
  width: 100%;
}

.description-area{
  width: 70vw;
}

#house-description{
  width: 100%;
  height: 50px;
}
#house-img-upload{
  width: 100%;
}

.houses-box{
  height: 500px;
  width: 60vw;
  margin-top: 50px;
  background-color: #fff;
  border: 1px solid #444;
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

