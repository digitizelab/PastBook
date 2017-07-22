import axios from 'axios';
import {connect} from 'react-redux';

export const FETCHING_INSTAGRAM = 'FETCHING_INSTAGRAM';
export const PAGINATE_INSTAGRAM = 'PAGINATE_INSTAGRAM';
export const FETCH_INSTAGRAM_FAILED = "FETCH_INSTAGRAM_FAILED";
export const PAGINATE_INSTAGRAM_FAILED = "PAGINATE_INSTAGRAM_FAILED";

const ROOT_URL = '/api';

import PhotoBook from '../components/PhotobookComponent';


const mapStateToProps = (state) => ({
    photos: state.photobook
});

const mapDispatchToProps = (dispatch) => ({
    fetchInstagram: () => dispatch(callWebservice()),
    paginateInstagram: (next_max_id) => dispatch(paginateWebservice(next_max_id))
})

export const callWebservice = (next_max_id) => {

    return dispatch => {
        const request = axios.get(`${ROOT_URL}/instagram?limit=9`)
            .then((response) => {
                dispatch({
                    type: FETCHING_INSTAGRAM,
                    payload: response
                })
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_INSTAGRAM_FAILED,
                    payload: error.response
                })
            });
    }
}

export const paginateWebservice = (next_max_id) => {
    const paginate = (next_max_id) ? `&max_id=${next_max_id}` : '';

    return dispatch => {
        const request = axios.get(`${ROOT_URL}/instagram?limit=9${paginate}`)
            .then((response) => {
                dispatch({
                    type: PAGINATE_INSTAGRAM,
                    payload: response
                })
            })
            .catch((error) => {
                dispatch({
                    type: PAGINATE_INSTAGRAM_FAILED,
                    payload: error.response
                })
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoBook);