import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    render() {
        return (  
            <React.Fragment>
                <form onSubmit={this.submitItem}>
                    <input
                    />
                    <div className='button-container'>
                        <button type="submit">Add Task</button>
                        <button type="submit" className="btn-gray">Clear Completed</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default TodoForm;
