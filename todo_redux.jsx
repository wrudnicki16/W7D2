import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './frontend/store/store';
import Root from './frontend/components/root';
import allTodos from './frontend/reducers/selectors';
import {fetchData} from './frontend/util/todo_api_util';
import {fetchTodos} from './frontend/actions/todo_actions';

const store = configureStore;

window.store = store;
window.allTodos = allTodos;
window.fetchData = fetchData;
window.fetchTodos = fetchTodos;


document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
