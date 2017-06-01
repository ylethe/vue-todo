<template>
    <div class="add-todo">
      <navigation :msg="msg"></navigation>
      <div class="operate-content">
        <form>
          <div class="form-item">
            <label>时间：</label><input type="text" v-model="time"/>
          </div>
          <div class="form-item">
            <label>标题：</label><input type="text" v-model="title"/>
          </div>
          <div class="form-item">
            <label>内容：</label><textarea type="text" v-model="content"></textarea>
          </div>
        </form>
        <div class="operate-item">
          <div class="operate-btn" id="add">
            <button @click="addTodo">添加</button>
          </div>
          <div class="operate-btn" id="cancel">
            <button @click="cancel">取消</button>
          </div>
        </div>
        <message :tip="tip" :isMsg="isMsg"></message>
      </div>
    </div>
</template>
<script>
  let that
  const date=/^(^(\d{4}|\d{2})(\-|\/|\.)\d{1,2}\3\d{1,2}$)|(^(\d{2})(\-|\/|\.)\d{1,2}\3\d{1,2}$)|(^\d{4}年\d{1,2}月\d{1,2}日$)|(^\d{1,2}月\d{1,2}日$)$/
  import Navigation from '../components/Nav'
  import Message from '../components/Msg.vue'
  export default {
    name: 'addTodo',
    components: {
      Navigation,
      Message
    },
    data () {
      that = this
      return {
        msg: '添加TODO',
        isMsg: false,
        tip: '',
        time: '',
        title: '',
        content: ''
      }
    },
    methods: {
      cancel (e) {
        e.preventDefault()
        that.time = ''
        that.title = ''
        that.content = ''
      },
      addTodo (e) {
        e.preventDefault()
        if(that.time === ""){
          that.tip = "时间不能为空"
          that.isMsg = true
          setTimeout(()=>{that.isMsg = false},1500)
        }
        else if(that.title === ""){
          that.tip = "标题不能为空"
          that.isMsg = true
          setTimeout(()=>{that.isMsg = false},1500)
        }
        else if(that.content === ""){
          that.tip = "内容不能为空"
          that.isMsg = true
          setTimeout(()=>{that.isMsg = false},1500)
        }
        else if(!date.test(that.time)){
          that.tip = "时间格式不对"
          that.isMsg = true
          setTimeout(()=>{that.isMsg = false},1500)
        }
        else{
          let todo = {
            time: that.time,
            title: that.title,
            content: that.content
          }
          that.tip = "添加成功"
          that.isMsg = true
          setTimeout(()=>{that.isMsg = false},1500)
          that.$store.commit('ADD_TODO',todo)
        }
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
  label{
    text-align: left;
    padding-left: 5px;
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
