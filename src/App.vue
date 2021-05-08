<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
     <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tabela">About</router-link>
    </div>
    {{list}} -->
    <router-view :list="list" @newList="onNewList" @onExcluir="onExcluir"/>
  </div>
</template>

<script>
export default {
  data(){
    return { list: []}
  },
  methods: {
    onNewList(list){
      this.list = list;
    },
    onExcluir(index){
      this.list.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
body {
  background-image: url('../public/background.png');
  background-position: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
