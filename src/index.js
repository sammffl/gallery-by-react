import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import App from './components/Main';
import reducer from './reducers';

// 添加日志
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
};
// 中间件
let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);
// Render the main component into the dom
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
