import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import SupportReducer from './reducer_contact';
import PhotobookReducer from "./reducer_photobook";

const rootReducer = combineReducers({
    form: formReducer,
    support: SupportReducer,
    photobook: PhotobookReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;