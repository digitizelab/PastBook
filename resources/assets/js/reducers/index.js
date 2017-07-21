import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import SupportReducer from './reducer_contact';

const rootReducer = combineReducers({
    form: formReducer,
    support: SupportReducer
});

export default rootReducer;