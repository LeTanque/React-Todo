import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }


    handleChanges = synthEvent => {
        this.setState({ [synthEvent.target.name]: synthEvent.target.value });
    };
    
    submitTask = event => {
        this.setState({ task: "" });
        this.props.addTask(event, this.state.task);
    };


    render() {
        return (  
            <React.Fragment>
                <form onSubmit={this.submitTask}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChanges}
                    />
                    <div className='button-container'>
                        <button>Add Task</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default TodoForm;
