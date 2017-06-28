<template>
  <div>
    <div class="example">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div class="example">
      <button @click="isShow = !isShow">Toggle show</button>
      <transition name="bounce">
        <p v-if="isShow">Look at me!</p>
      </transition>
    </div>
    <div class="example">
      <div id="list-demo" class="demo">
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <transition-group name="list" tag="p">
          <span v-for="item in items" :key="item" class="list-item">
            {{ item }}
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show: true,
        isShow: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      }
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }


  }
</script>
<style scoped>
  .example{
    width: 300px;
    margin: 100px auto;
  }
  p{
    margin-top: 20px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-active {
    opacity: 0;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
