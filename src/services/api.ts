import axios  from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001/',
});

export const getCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})