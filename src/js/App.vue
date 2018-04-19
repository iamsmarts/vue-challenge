<template>
  <div id="app" class="container">
    <div class="small-4 small-offset-4 hi5-logo">
      <img src="//s3-us-west-1.amazonaws.com/hi5fechallenge/hi5-logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hi5-logo img{
  max-height: 75px;
}

</style>
