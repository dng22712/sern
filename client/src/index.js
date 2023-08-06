import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './logo.svg'
import App from './App';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const loadState = () => {
    try{
        let Auth = localStorage.getItem('Auth')
        if(Auth === null){
            return undefined
        }
        Auth = JSON.parse(Auth)
        return {Auth}
    } catch(err){
        return undefined
    }
}

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
