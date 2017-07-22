import {
    FETCH_INSTAGRAM_FAILED,
    FETCHING_INSTAGRAM,
    PAGINATE_INSTAGRAM,
    PAGINATE_INSTAGRAM_FAILED
} from '../actions/PhotobookActions';

const INITIAL_STATE = {
    authenticated: true,
    pagination: undefined,
    data: undefined,
    loading: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_INSTAGRAM:
            return {
                ...state,
                authenticated: true,
                pagination: action.payload.data.data.pagination,
                data: action.payload.data.data.data
            };
        case PAGINATE_INSTAGRAM:
            return {
                ...state,
                authenticated: true,
                pagination: action.payload.data.data.pagination,
                data: action.payload.data.data.data
            };
        case FETCH_INSTAGRAM_FAILED:
            if (action.payload.status === 404) {
                return {...state, authenticated: false};
            }
            return state;
        default:
            return state;
    }
}