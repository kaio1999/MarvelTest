import axios from 'axios';

const ApiMarvelHeroes = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics/82969?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936'
});




export default ApiMarvelHeroes