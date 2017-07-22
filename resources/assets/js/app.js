import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import App from './components/app';
import Header from './partials/Header';
import Footer from './partials/Footer';
import ContactNew from './actions/ContactActions';
import PhotoBook from './actions/PhotobookActions';

import store from './reducers/index'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/contact-us" component={ContactNew}/>
                    <Route path="/photo-book" component={PhotoBook}/>
                    <Route path="/" component={App}/>
                </Switch>
                <Footer/>
                <ToastContainer/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.app'));