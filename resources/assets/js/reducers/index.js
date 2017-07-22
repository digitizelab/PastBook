import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import SupportReducer from './reducer_contact';

const rootReducer = combineReducers({
    form: formReducer,
    support: SupportReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;