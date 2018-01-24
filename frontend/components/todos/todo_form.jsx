import React from 'react';

export class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state={title: "",body: "",done: false};
    this.setProperty = this.setProperty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // this.setState({id: Math.random()});
    let todo = this.state;
    this.props.createTodo({todo}).then(
      () => this.setState({title: '', body: ''})
    );
  }

  // setTitle(event){
  //   const title = event.target.value;
  //   this.setState({title});
  // }

  setProperty(event){
    const target = event.target;
    const name = target.name;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }

    this.setState({
      [name]: value,
    });

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title: <input value={this.state.title} type="text" name="title" onChange={this.setProperty}></input>
        </label>
        <label>
          Body: <input value={this.state.body} type="text" name="body" onChange={this.setProperty}></input>
        </label>
        <label>
          Done: <input value={this.state.done} type="checkbox" name="done" onChange={this.setProperty}/>
        </label>

        <input type="submit" value="Create Todo"/>
      </form>
    );
  }

}
