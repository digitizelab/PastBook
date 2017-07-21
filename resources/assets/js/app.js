import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import { ToastContainer } from 'react-toastify';

import App from './components/app';
import ContactNew from './components/contact_new';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/contact-us" component={ContactNew}/>
                    <Route path="/" component={App}/>
                </Switch>
                <ToastContainer />
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));