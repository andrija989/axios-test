export const mixin1 = {
    data() {
        return{
            user:''
        }
    },
    created() {
        this.user = "Misa"
        console.log("Called from mixin 1")
    }
}

export const mixin2 = {
    data() {
        return{
            user:''
        }
    },
    created() {
        this.user = "Vanja"
        console.log("Called from mixin 2")
    },
    methods: {
        getUserName() {
            alert('Vanja Bijalkovic')
        }
    }
}

export const mixin3 = {
    created() {
        console.log("Called from mixin 3")
    },
    mounted() {
        console.log('Called from mounted')
    }
}