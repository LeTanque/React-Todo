import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoArr = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoArrObject: todoArr,
      task: "",
      id: "",
      completed: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    // console.log(event.target);
    // setStudent with new student at the end of the array
    // .push() makes us happy, because it works, but react doesn't like it. .concat is an option that works
    // React disallows push because it will mutate the array and could end with side effects.
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    // Pretty much everyone uses the spread operator now, though. (...)
    this.setState({
      todoArrObject: [...this.state.todoArrObject, newTodo],
      task: "",
      id: "",
      completed: ""
    });
  };

  handleChanges = event => {
    // console.log(event.target.value);
    //     this.setState({ name: e.target.value })  // Non dynamic way to set state of particular field
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  render() {
    return (
      <div className="todo-app">
        <h1>TododoT</h1>
        <br />
        <TodoForm
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
        <br />
        <div className='todo-list-container'>
          {this.state.todoArrObject.map(taskFromMap => (
            <TodoList key={taskFromMap.task} currentTasks={taskFromMap} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
