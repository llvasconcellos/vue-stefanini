<template>
  <div>
    <div class="container-fluid cabec">
      <img width="215" align="left" :src="require('/public/blackwall.png')" />
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead class="tabcabec">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Tipo de Telefone</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(l, index) in list" :key="l.id">
            <th scope="row">{{l.nome}}</th>
            <td>{{l.sobrenome}}</td>
            <td>({{l.ddd}}) {{l.telefone}}</td>
            <td>{{l.tipo}}</td>
            <td>{{l.status ? 'Ativo' : 'Inativo'}}</td>
            <td><a href="#" v-on:click="onExcluir(index)">x Excluir</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col">
        <router-link  class="btn btn-warning" to="/" tag="button">Cadastrar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list :{
      type: Array,
      required: true
    }
  },
  methods: {
    onExcluir(index) {
      this.$emit('onExcluir', index);
    }
  }
}
</script>

<style scoped>
.cabec {
  background: black;
  float:left;
}
.container {
  background:white;
  border: solid 1px #D58A08;
}
.tabcabec {
  background: black;
  color: white;
  height: 3em;
  padding-top: 1em;
}
tbody {
  background: white;
}
</style>