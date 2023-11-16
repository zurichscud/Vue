<template >
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学校地址：{{ +age+1 }}</h2>
    <h2>学校人数：{{ peoples }}</h2>
    <button @click="showName">点我提示名字</button>
  </div>
</template>

<script>
import { mod } from "../mixin";
export default {
  name: "SchoolInfo",
  props:['name','address','age'],
  mixins:[mod]

};
</script>
<style scoped>
.demo{
  background-color:blanchedalmond ;
}
</style>

