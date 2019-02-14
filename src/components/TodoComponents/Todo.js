import React from 'react';


const Todo = props => {
    return (
        <React.Fragment>
            <div
                className={`task ${props.task.completed ? "completed" : ""}`}
                onClick={() => props.toggleTask(props.task.id)}>
                <p>{props.task.task}</p>
            </div>
        </React.Fragment>
    );
};
 
export default Todo;
