<template>
  <nav class="navigation">
    <div class="top-left" v-on:click="backTo">
      <img src="../images/arrow.png"/>
    </div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
  </nav>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import VueRouter from '../router/index'

  export default {
    name: 'navigation',
    props: ['msg'],
    replace: true,
    components: {
      VLink
    },
    methods: {
      backTo (e) {
        e.preventDefault()
        console.log(this.$route.path)
        if (this.$route.path === '/home') {
          VueRouter.push({path:'/login'})
        }
        else if (this.$route.path === '/home/addTodo') {
          VueRouter.push({path:'/home'})
        }
        else if (this.$route.path === '/home/todoList') {
          VueRouter.push({path:'/home'})
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
   position:fixed;
   width: 100%;
   height: 50px;
   top: 0;
   left: 0;
   background: #42b983;
}
.top-left{
  width: 100px;
  height: 32px;
  line-height: 32px;
  float: left;
  margin: 6px 0 0 8px;
}
img{
  width: 23px;
  height: 23px;
  float: left;
  margin-top: 5px;
}
.title{
  width: 40%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
}
h1{
  color: #fff;
  font-size: 18px;
}
</style>
