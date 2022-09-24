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


// Create Redux Store
const storeInstance = createStore(
    combineReducers(
        {
            message
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
