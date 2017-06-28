<template>
    <div class="login">
      <navigation :msg='msg'></navigation>
      <div class="head-img">
        <img src="http://oia85104s.bkt.clouddn.com/headPicture.c68fb85.jpg"/>
      </div>
      <form>
        <div class="form-item">
          <input placeholder="请输入用户名" type="text"/>
        </div>
        <div class="form-item">
          <button><router-link to="home">登录</router-link></button>
        </div>
      </form>
    </div>
</template>
<script>
  //import VLink from '../components/VLink.vue'
  import Navigation from '../components/Nav'
  export default {
    name: 'login',
    data () {
      return {
        msg: '登录'
      }
    },
    components: {
      Navigation
    }
  }
</script>
<style scoped>
  .login{
    max-width: 500px;
    max-height: 550px;
    margin: 120px auto;
  }
  .head-img{
    width: 100px;
    height: 100px;
    margin: 30px auto;
  }
  img{
    width: 100px;
    height: 100px;
  }
  form{
    width: 80%;
    height: 200px;
    margin: 40px auto;
  }
  .form-item{
    width: 100%;
    height: 42px;
    margin: 2px auto;
    line-height: 30px;
  }
  input{
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }
  button{
    width: 100%;
    height: 40px;
    font-size: 18px;
    margin-top: 16px;
    border: 1px solid #42b983;
    border-radius: 5px;
    background: #42b983;
    outline: none;
  }
  a{
    color: #fff;
    text-decoration: none;
  }

</style>
