import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer as formReducer } from 'redux-form';
import listToDo from './module/listToDo/listToDoReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(
    combineReducers({
        form: formReducer,
        listToDo: listToDo
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
