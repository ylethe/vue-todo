<template>
    <div class="todo-list">
      <navigation :msg="msg" :path="path"></navigation>
      <div class="todo-content">
        <ul>
          <li v-for="list in todos">
            <div class="time">{{list.time}}</div>
            <div class="title">{{list.title}}</div>
            <div class="content">内容
              <div class="show-content">{{list.content}}</div>
            </div>
            <button class="complete" @click="completeTodo(0)">完成</button>
          </li>
        </ul>
      </div>
      <div class="clear">
        <button class="clear-btn" @click="deleteTodo">清空</button>
      </div>
    </div>
</template>
<script>
  let that
  import Navigation from '../components/Nav'
  export default {
    name: 'todoList',
    components: {
      Navigation
    },
    data () {
      that = this
      return {
        todos: that.$store.state.todos,
        msg: 'TODO列表',
        path: '/home'
      }
    },
    methods:{
      deleteTodo () {
        console.log("ndslfs")
        console.log(that.$store.state.todos)
        that.$store.commit('DELETE_TODO')
      },
      completeTodo(index){
        that.$store.commit('COMPLETE_TODO',index)
      }
    }
  }
</script>
<style scoped>
  .todo-list{
    width: 100%;
    height: 100%;
  }
  .todo-content{
    max-width: 500px;
    max-height: 550px;
    margin: 0 auto
  }
  ul{
    width: 80%;
    margin: 20px auto;
    border: 1px solid #42b983;
    border-bottom: none;
    clear: both;
  }
  li{
    width: 100%;
    height: 35px;
    text-align: center;
    list-style-type: none;
    border-bottom:  1px solid #42b983;
    position: relative;
    font-size: 14px;
  }
  .time{
    width: 60px;
    height: 35px;
    line-height: 35px;
    float: left;
    margin-left: 10px;
  }
  .title{
    width: 90px;
    height: 35px;
    line-height: 35px;
    float: left;
    margin-left: 10px;
  }
  .content{
    width: 40px;
    height: 35px;
    line-height: 35px;
    float: left;
    margin-left: 5px;
  }
  .content:hover .show-content {
    display: block;
    z-index: 9;
  }
  .show-content{
    display: none;
    width: 100px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    right: -1px;
    top: 35px;
    border-radius: 5px;
    background: #ccc;
    color: #fff;
  }
  .complete{
    height: 35px;
    line-height: 35px;
    float: right;
    margin-right: 5px;
    border: none;
    background: #fff;
    outline: none;
    color: #42b983;
  }
  .clear {
    width: 80%;
    height: 40px;
    margin: 15px auto;
  }
  .clear-btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: #42b983;
    background: #42b983;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
  }
</style>
