<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <button @click.once="fun">click</button><br /><br />
    <button @click.once="funWait">clickWait</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      str: "Vue世界",
    };
  },
  methods: {
    fun() {
      this.$store.dispatch("join", this.str);
    },
    funWait() {
      this.$store.dispatch("joinWait", this.str);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
