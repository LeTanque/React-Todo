import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }
    handleChanges = synthEvent => {
        this.setState({ [synthEvent.target.name]: synthEvent.target.value });
    };
    
    submitItem = event => {
        this.setState({ item: "" });
        this.props.addItem(event, this.state.item);
    };

    render() {
        return (  
            <React.Fragment>
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        name="task"
                        placeholder="Enter Task Here"
                        value={this.state.task}
                        onChange={this.handleChanges}
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
