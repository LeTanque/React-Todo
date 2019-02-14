import React from 'react';
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
  constructor(){
    super();
    this.state = {
      todoArr
    };
  }


  render() {
    return (
      <div className="todo-app">
        <h1>TododoT</h1>
        <br />
        <TodoForm
        />

        <br />
        
        <ul className="todo-list-container">
            <TodoList
            />
        </ul>

      </div>
    );
  }
}



export default App;


