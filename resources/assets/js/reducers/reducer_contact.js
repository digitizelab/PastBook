import {SUBMIT_REQUEST, SUBMIT_FAILED} from '../actions/ContactActions';

const INITIAL_STATE = {
    supportCreated: false,
    error: {name: undefined, email: undefined, subject: undefined, description: undefined},
    loading: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SUBMIT_REQUEST:
            return {...state, supportCreated: true, error: undefined};
        case SUBMIT_FAILED:
            if (action.payload.status === 422) {
                return {...state, error: action.payload.data.errors};
            }
            return state;
        default:
            return state;
    }
}