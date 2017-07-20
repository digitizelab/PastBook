import axios from 'axios';

//Set laravel CSRF token to the axios common header
const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';

const ROOT_URL = '/api';

export function submitRequest(values, callback) {
    const request = axios.post(`${ROOT_URL}/request`, values)
        .then(() => callback());

    return {
        type: SUBMIT_REQUEST,
        payload: request
    }
}