<template>
  <div>
    <p>{{date}}</p>
    <nav>
      <router-link to="/posts">Posts </router-link>
      <router-link to="/users">Users </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>


export default {
   data() {
     return {
       date: new Date()
     }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
