<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ name }}</h1>
    <hr>
    <router-link to="/a" >clickA</router-link>
    <br>
    <router-link to="/b">clickB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup(){
    let name ='Vue世界'
    let age=12
    return {
      name,
      age,

    }

  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
