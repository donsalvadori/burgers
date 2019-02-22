import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8349e.firebaseio.com/'
});

export default instance;