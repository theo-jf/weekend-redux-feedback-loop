import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers below
const message = (state = 'Welcome!', action) => {

    switch (action.type) {
        case 'SET_MESSAGE_WELCOME':
            return 'Welcome!';
        case 'SET_MESSAGE_THANKS':
            return 'Thank you for your submission';
    }
    return state;
}

const responses = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_FEELING':
            return {...state, feeling: action.payload};
        case 'ADD_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'ADD_SUPPORTED':
            return {...state, supported: action.payload};
        case 'ADD_COMMENTS':
            return {...state, comments: action.payload};
        case 'RESET_STORE':
            return {};
    }
    return state;
}

const allResponses = (state = [], action) => {

    switch (action.type) {
        case 'SET_RESPONSES':
            return action.payload;
    }
    return state;
}


// Create Redux Store
const storeInstance = createStore(
    combineReducers(
        {
            message,
            responses,
            allResponses
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render( 
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
