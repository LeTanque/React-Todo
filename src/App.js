import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoArr = [];



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoArr
    };
  }


  addTask = (event, task) => {
    event.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoArr: [...this.state.todoArr, newTask]
    });
  };

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

  clearCompleted = event => {
    event.preventDefault;
    this.setState({
      todoArr: this.state.todoArr.filter(task => !task.completed)
    });
  };


  render() {
    return (
      <div className="todo-app">
        <h1>TododoT</h1>
        <br />
        <TodoForm
          addTask={this.addTask}
        />

        <br />

        <ul className="todo-list-container">
            <TodoList
              todoArr={this.state.todoArr}
              toggleTask={this.toggleTask}
            />
        </ul>
        <button onClick={this.clearCompleted} className='btn-gray'>Clear Completed Tasks</button>
      </div>
    );
  }
}



export default App;


