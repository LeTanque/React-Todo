import React from 'react';


const Todo = props => {
    return (
        <li>
            <div
                className={`item ${props.todo.completed ? "purchased" : ""}`}
                // style={props.todo.completed ? { textDecoration: 'line-through' } : null}
                onClick={() => props.handleToggleComplete(props.todo.id)}
            >
                {props.todo.task}
            </div>
        </li>
    );
};
 
export default Todo;
