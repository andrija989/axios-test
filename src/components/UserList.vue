<template>
<div>
    
    <ul>
        <li v-for='(user,index) in users' :key="index">
            {{ user.name }} - {{ user.email}}
        </li>
    </ul>
</div>
</template>

<script>
import { userService } from '@/services/user-service'

export default {
    data(){
        return {
            users:[],
            
        }
    },
    

    created () {
     userService.getUsers()
       .then(response => {
         this.users = response.data
       }).catch(e => {
         console.log(e)
       })


      
  },
}
</script>

<style>

</style>
