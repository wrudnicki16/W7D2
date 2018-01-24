import React from 'react';
import TodoListItem from './todo_list_item';
import { TodoForm } from './todo_form';


// const TodoList = () => <h3> Todo List goes here!</h3>;

class TodoList extends React.Component{
  constructor(props){
    super(props);
    // this.render();
    //this.uniqueId = this.uniqueId.bind(this);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  uniqueId() {
    return new Date().getTime();
  }


  render(){
    console.log(this.props.todos);
    return(
      <div>
        <ul>
          {
            this.props.todos.map((todo, idx) =>
              <TodoListItem todo={todo} key={idx} />
            )
          }
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}



export default TodoList;
