import { RECEIVE_TODOS } from  '../actions/todo_actions';
import { RECEIVE_TODO } from  '../actions/todo_actions';
import  merge  from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODO: // How to merge two object which is initialState with current new action.todo
      let newState1 = merge({},state);
      console.log(action.todo);
      newState1[action.todo.id]= action.todo;
      return newState1;
    case RECEIVE_TODOS:
      const newState = merge({}, state);
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
