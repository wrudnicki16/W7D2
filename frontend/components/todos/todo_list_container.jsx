import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo,fetchTodos, createTodo} from '../../actions/todo_actions';


const mapStatetoProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  // receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});




export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
