
import {SUBMIT_REQUEST} from '../actions';

const INITIAL_STATE = {supportCreated: false, error: null, loading: false};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SUBMIT_REQUEST:
            console.log(action.payload);
        default:
            return state;
    }
}