<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/a">点击切换A</router-link><br>
    <router-link to="/b">点击切换B</router-link>
    <div>
      <h1>router-demo:</h1>
      <hr />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
