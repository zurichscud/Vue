<template>
    <div>
        <ul>
            <li>msgid：{{ $route.query.id }}</li>
            <li>msgtitle：{{ $route.query.title }}</li>
        </ul>       
    </div>
</template>
<script>

export default{
    name:'DisplayDetail',
}
</script>