import React from 'react';
import {Provider} from 'react-redux';
import App from './app';
import todoList from './todos/todo_list';


const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>

);


export default Root;
