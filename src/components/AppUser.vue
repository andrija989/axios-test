<template>
    <div>
       <p>Name: {{user.name}}</p>
       <p>Username: {{user.username}}</p> 
       <p>Email: {{user.email}}</p> 
       <p>Adress: {{user.address}}</p>
       
       <p>Phone: {{user.phone}}</p>
       <p>WebSite: {{user.website}}</p>
       <p>Company: {{user.company}}</p>

    </div>
</template>

<script>
import { userService } from '@/services/user-service'
import SingleUser from '@/components/SingleUser'

export default {
    data() {
        return {
            users: []
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
     
    computed: {
    user () {
      return this.users.find(user => {
        return user.id == this.$route.params.id
        console.log(user)
      })
    }
  },
 

   
}
</script>

<style>

</style>
