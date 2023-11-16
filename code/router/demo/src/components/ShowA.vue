<template>
    <div>
        <p>Hello,A</p>
        <router-link to="/a/news">click to NewsList</router-link><br>
        <router-link to="/a/message">click to MsgList</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>


<script>

export default{
    name:'ShowA',
    components:{

    }
    
}


</script>