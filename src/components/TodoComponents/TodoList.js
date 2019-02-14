import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// const TodoList = props => {
//     return (  
//         <ul>
//             <li>{props.currentTasks.task}</li>
//         </ul>
//     );
// }

const TodoList = props => {
    return (
        <React.Fragment>
            {props.todos.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </React.Fragment>
    );
};


export default TodoList;



// <div className='todo-list-container'>
// {this.state.todoArrObject.map(taskFromMap => (
//   <TodoList key={taskFromMap.task} currentTasks={taskFromMap} />
// ))}
// </div> 