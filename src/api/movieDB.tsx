import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'b1c9c1fc460ec96b54e038646ed60c83',
        language: 'es-ES'
    }
})

export default movieDB;