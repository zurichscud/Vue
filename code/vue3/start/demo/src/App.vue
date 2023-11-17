<template>
  <div>
    <h1>Hello vue</h1>
    <HelloWorld></HelloWorld>
    <div :class="obj">!</div>
    <div :style="style"></div>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import helloWorld from "./components/HelloWorld.vue";

let msg = ref('hello Vue')
const obj={
  box1:false,
  box2:true,
  box3:true
}
const isDisabled = false
const style={
  backgroundColor:'yellow'
}

function f() {
  console.log(msg.value)
}

const res = computed(() => {
  return res + 1
})

</script>
<style scoped>
h1 {
  background-color: yellow;
}
</style>