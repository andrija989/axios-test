import axios from 'axios';

export default class UserService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getUsers() {
        return axios.get('users');
    }

    getUserPosts() {
        return axios.get('posts')
    }
    
    find(id) {
        return this.getUsers().find(users => user.id == id);
      }
}

export const userService = new UserService()

