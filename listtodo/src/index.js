import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer as formReducer } from 'redux-form';
import addNewTodoReducer from '../src/module/addNewToDo/addNewTodoReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(
    combineReducers({
        form: formReducer,
        addNewTodoReducer: addNewTodoReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
