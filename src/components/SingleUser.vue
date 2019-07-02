<template>
    <div>
        <router-link :to="routeToUser">
            {{ user.name }} - {{ user.email}}
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['user'],

    computed: {
        routeToUser() {
            return `/users/${this.user.id}`
        }
    }
}
</script>

<style>

</style>
