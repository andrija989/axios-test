<template>
<div>
    
    <ul>
        <li v-for='(user,index) in users' :key="index">
            <SingleUser 
            :user = user
            />
        </li>
    </ul>
</div>
</template>

<script>
import { userService } from '@/services/user-service'
import SingleUser from '@/components/SingleUser'

export default {
    components: {
      SingleUser
    },

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
