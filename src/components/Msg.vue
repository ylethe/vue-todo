<template>
  <div class="showMsg" v-bind:style="isShow">
     {{ tip }}
  </div>
</template>
<script>
  export default {
    name: 'navigation',
    props: ['tip','isMsg'],
    replace: true,
    computed: {
        isShow: function () {
          return {
            display: this.isMsg ?"block":"none"
          }
        }
    }
  }
</script>
<style scoped>
  .showMsg {
    width: 200px;
    height: 30px;
    margin: 30px auto;
    text-align: center;
    line-height: 30px;
    background: #ddd;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
  }
</style>
