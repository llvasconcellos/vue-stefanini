<template>
    <div class="mainform">
      <h2>Lista de Espera</h2>
      <form @submit.prevent="addLista(telefone)">
      <div class="container">
        <div class="row">
          <div class="col-1">
              <label for="ddd" class="form-label">DDD *</label>
              <input type="text" v-model="telefone.ddd" class="form-control" size="3" id="ddd">
          </div>
          <div class="col">
              <label for="telefone" class="form-label">Telefone *</label>
              <input type="text" v-model="telefone.telefone" class="form-control" id="telefone">
          </div>
          <div class="col">
            <label for="tipo" class="form-label">Tipo de Telefone *</label>
            <select v-model="telefone.tipo" type="text" class="form-control" id="tipo">
              <option value="Residencial">Residencial</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Celular">Celular</option>
              <option value="Comercial">Comercial</option>
            </select>
          </div>
          <div class="col-4">
            <div class="row">
              <div class="col">
                <input v-model="telefone.ativo" class="form-check-input" type="radio" name="ativo" id="ativo" value="true">
                <label class="form-check-label" for="ativo">
                  Telefone Ativo
                </label>
              </div>
              <div class="col">
                <input v-model="telefone.ativo" class="form-check-input" type="radio" name="ativo" id="inativo" value="false">
                <label class="form-check-label" for="inativo">
                  Telefone Inativo
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="nome" class="form-label">Nome</label>
            <input v-model="telefone.nome" type="text" class="form-control" id="nome">
          </div>
          <div class="col-7">
           <label for="sobrenome" class="form-label">Sobrenome</label>
            <input v-model="telefone.sobrenome" type="text" class="form-control" id="sobrenome">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="add-btn"><input type="submit" class="btn btn-warning" value="Adicionar"></div>
          </div>
        </div>
         <div class="row">
          <div class="col">
            <button type="button" class="btn btn-secondary">Ver Tabela</button>
          </div>
        </div>
      </div>
      </form>
    </div>
</template>

<script>
export default {
  data(){
    return {lista: [], telefone: { ddd: '' , telefone: '', }}
  },
  methods: {
    addLista(telefone){
      telefone.id = Date.now();
      this.lista.push(telefone);
      this.telefone = {};
    }
  }
}
</script>

<style lang="scss">
.mainform {
  width: 75%;
  background-color:#ffffff2d;
  margin:auto;
  color: white;
}
.add-btn {
  text-align:right;
}
</style>
