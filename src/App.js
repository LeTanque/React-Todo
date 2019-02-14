import React from 'react';
// import Todo from './components/TodoComponents/Todo';
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
      todoArr
    };
  }

  addTodo = (event, item) => {
    // console.log(event.target);
    // setStudent with new student at the end of the array
    // .push() makes us happy, because it works, but react doesn't like it. .concat is an option that works
    // React disallows push because it will mutate the array and could end with side effects.
    // Pretty much everyone uses the spread operator now, though. (...)
    event.preventDefault();
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoArr: [...this.state.todoArr, newTodo],
      // task: "",
      // id: Date.now(),
      // completed: ""
    });
  };

  // handleChanges = event => {
  //   //     this.setState({ name: e.target.value })  // Non dynamic way to set state of particular field
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  toggleTask = taskId => {
    this.setState({
      todoArr: this.state.todoArr.map(task => {
        if (taskId === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    });
  };

  clearPurchased = event => {
    event.preventDefault;
    this.setState({
      todoArr: this.state.todoArr.filter(task => !task.purchased)
    });
  };


  render() {
    return (
      <div className="todo-app">
        <h1>TododoT</h1>
        <br />
        <TodoForm
          addTodo={this.addTodo}
          // handleChanges={this.handleChanges}
          task={this.state.task}
        />

        <br />
        
        <ul className="todo-list-container">
            <TodoList
              // handleToggleComplete={this.toggleTodoComplete}
              todos={this.state.todoArrObject}
            />
        </ul>

      </div>
    );
  }
}



export default App;


