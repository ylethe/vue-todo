<template>
    <div class="home">
      <Navigation :msg="msg" :path="path"></Navigation>
      <div class="user-content">
        <router-link to="/home/addTodo">添加todo</router-link>
        <router-link to="/home/todoList">todo列表</router-link>
      </div>
    </div>
</template>
<script>
  import Navigation from '../components/Nav'
  import VLink from '../components/VLink.vue'
  export default {
    name: 'Home',
    components: {
      Navigation,
      VLink
    },
    data () {
      return {
        msg: '用户中心',
        path: '/login'
      }
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
