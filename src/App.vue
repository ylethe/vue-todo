<template>
  <div id="app">
    <navigation></navigation>
    <login></login>
  </div>
</template>

<script>
import Login from './components/Login'
import Navigation from './components/Nav'

export default {
  name: 'app',
  components: {
    Login,
    Navigation
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
