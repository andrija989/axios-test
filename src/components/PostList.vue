<template>
<div>
    <label for="term">Post filter</label>
    <input type="text" v-model="term" />
    <ul>
        <li v-for='(post,index) in filteredArray' :key="index">
            {{ post.title }} - {{post.body}}
        </li>
    </ul>
</div>
</template>

<script>
import { userService } from '@/services/user-service'

export default {
    data(){
        return {
            posts:[],
            term: ""
        }
    },
    

    created () {
     userService.getUserPosts()
       .then(response => {
         this.posts = response.data
       }).catch(e => {
         console.log(e)
       })


      
  },
  computed: {
    filteredArray() {
        return this.posts.filter(post => {
            return post.body.toLowerCase().includes(this.term.toLowerCase())
        })
    }    
  },
}
</script>

<style>

</style>
