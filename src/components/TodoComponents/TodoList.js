import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <React.Fragment>
            {props.todos.map(todo => (
                <Todo
                 
                />
            ))}
        </React.Fragment>
    );
};


export default TodoList;


