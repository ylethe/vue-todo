<template>
  <nav class="navigation">
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      msg: '登录'
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
.title{
  width: 20%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;

}
h1{
  color: #fff;
  font-size: 22px;
}
</style>
