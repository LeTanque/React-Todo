import React from 'react';


const TodoForm = props => {
    return (  
        <React.Fragment>
            <form onSubmit={props.addTodo}>
            <input
                type="text"
                value={props.task}
                name="task"
                onChange={props.handleChanges}
                placeholder="Enter Task Here"
            />
            <button type="submit">Add Task</button>
            </form>
        </React.Fragment>
    );
}
 
export default TodoForm;
