import axios from 'axios';
import { getAuthorizeToken, login, logout } from './helpers';

const mainURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
    mainURL,
});

const authorizeApi = axios.create({
    mainURL,
});


authorizeApi.interceptors.request.use(
    (config) => {
        const token = getAuthorizeToken();
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

const getData = (res) => res.data;