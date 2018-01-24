import { fetchData, postTodo } from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos

});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  fetchData().then(todos => {
    // console.log(todos);
    return dispatch(receiveTodos(todos));
  })
);

export const createTodo = (todo) => dispatch => (
  postTodo(todo).then((todo1) => {
    return dispatch(receiveTodo(todo1));
  })
);
