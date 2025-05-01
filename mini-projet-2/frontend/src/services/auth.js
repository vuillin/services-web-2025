import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

export default {
    register(email, password) {
        return axios.post(API_URL + 'register', { email, password });
    },
    login(email, password) {
        return axios.post(API_URL + 'login', { email, password })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('user-token', res.data.token);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
                }
                return res.data;
            });
    },
    logout() {
        localStorage.removeItem('user-token');
        delete axios.defaults.headers.common['Authorization'];
    }
};
