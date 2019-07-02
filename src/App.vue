<template>
  <div>
    <div>{{ getFormatedDate() }}</div>
    <nav>
      <router-link to="/posts">Posts </router-link>
      <router-link to="/users">Users </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { dataMixin } from  '@/mixins/mixin'


export default {
  mixins: [dataMixin],
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
