import axios from 'axios';
import {connect} from 'react-redux';

//Set laravel CSRF token to the axios common header
const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const SUBMIT_FAILED = "SUBMIT_FAILED";

const ROOT_URL = '/api';

import ContactNew from '../components/ContactNewComponent';


const mapStateToProps = (state) => ({
    supportRequest: state.support
});

const mapDispatchToProps = (dispatch) => ({
    submitRequest: (values, callback) => dispatch(callWebservice(values, callback))
})

export const callWebservice = (values, callback) => {
    return dispatch => {
        //TODO need to handle server side validation
        const request = axios.post(`${ROOT_URL}/support`, values)
            .then((response) => {
                dispatch({
                    type: SUBMIT_REQUEST,
                    payload: response
                }, callback())
            })
            .catch((error) => {
                dispatch({
                    type: SUBMIT_FAILED,
                    payload: error.response
                })
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactNew);