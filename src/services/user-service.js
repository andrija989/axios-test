import axios from 'axios';

export default class UserService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getUsers() {
        return axios.get('users');
    }

    getUserPosts() {
        return axios.get('/posts')
    }
}

export const userService = new UserService()