<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <!-- <router-link :to="`/a/message?${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
        <router-link :to="{
            path:'/a/message/detail',
            query:{
                id:m.id,
                title:m.title
            }

        }">{{ m.title }}</router-link>

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>


<script>


export default {
  name: "MsgList",
  data() {
    return {
      message: [
        { id: "001", title: "Beijing" },
        { id: "002", title: "Tianjing" },
      ],
    };
  },
};
</script>