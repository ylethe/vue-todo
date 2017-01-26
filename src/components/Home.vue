<template>
    <div class="home">
      <div class="user-content">
        <v-link href="/home/addTodo">添加todo</v-link>
        <v-link href="/home/todoList">todo列表</v-link>
      </div>
    </div>
</template>
<script>
  import VLink from '../components/VLink.vue'
  export default {
    name: 'Home',
    components: {
      VLink
    }
  }
</script>
<style scoped>
  .home{
    max-width: 500px;
    max-height: 550px;
    margin: 0 auto;
  }
  .user-content{
    width: 70%;
    margin: 100px auto;
  }
  a{
    width: 100%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    background: #42b983;
    border-radius: 5px;
    margin: 10px 0;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
</style>
