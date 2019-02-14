import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const sortedList = props.todoArr.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="shopping-list">
            {sortedList.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
        </div>
    );
};


export default TodoList;


