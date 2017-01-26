<template>
    <div class="add-todo">
      <navigation :msg="msg" :path="path"></navigation>
      <div class="operate-content">
        <form>
          <div class="form-item">
            <label>时间：</label><input type="text" ref="time"/>
          </div>
          <div class="form-item">
            <label>标题：</label><input type="text" ref="todoTitle"/>
          </div>
          <div class="form-item">
            <label>内容：</label><textarea type="text" ref="todoContent"/>
          </div>
        </form>
        <div class="operate-item">
          <div class="operate-btn" id="add">
            <button>添加</button>
          </div>
          <div class="operate-btn" id="cancel">
            <button>取消</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Navigation from '../components/Nav'
  export default {
    name: 'addTodo',
    components: {
      Navigation
    },
    data () {
      return {
        msg: '添加TODO',
        path: '/home'
      }
    }
  }
</script>
<style scoped>
  .add-todo{
    width: 100%;
    height: 100%;
  }
  .operate-content{
    max-width: 500px;
    max-height: 550px;
    margin: 80px auto;
    clear: both;
  }
  form{
    width: 80%;
    margin: 20px auto;
  }
  .form-item{
    width: 100%;
    margin: 10px 0;
  }
  input{
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    padding: 10px;
  }
  textarea{
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    padding: 10px;
  }
  .operate-item{
    width: 130px;
    height: 32px;
    margin: 0 auto;
  }
  button{
    width: 100%;
    height: 100%;
    background: #42b983;
    border: 1px solid #42b983;
    color: #fff;
    border-radius: 5px;
    margin: 0 20%;
    outline: none;
  }
  .operate-btn{
    width: 50px;
    height: 32px;
  }
  #add{
    float: left;
  }
  #cancel{
    float: right;
  }
</style>
