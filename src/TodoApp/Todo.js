import React, {Component} from 'react';
import { ListGroup, InputGroup, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';  
import './Todo.css';

class Todo extends Component{
    state={
        editMode: false,
        text: this.props.text,
        completed: this.props.completed
    }
    handleDeleteClick = () => {
        this.props.removeTodo(this.props.id);
    }
    handleEditClick = () => {
        this.setState({editMode: true});
    }
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    handleSave = (e) => {
        e.preventDefault();
        const todo = {text: this.state.text, id: this.props.id, completed: this.state.completed};
        this.props.editTodo(todo);
        this.setState({editMode: false})
    }
    toggleCompletion = () => {
        this.setState(st => ({ completed: !st.completed}))
    }
    handleCancel = (e) => {
        this.setState({editMode: false})
    }
    render(){
        const buttonStyles = { cursor: 'pointer', float: 'right', display: "inline", padding: "2px 5px", color: "white", backgroundColor: "red", borderRadius: '20%'};
        return(
            <div>
                <ListGroup.Item>
                {!this.state.editMode ?                 
                    <div>
                        <span className={this.state.completed ? "completed" : null} style={{cursor: "pointer"}} onClick={this.toggleCompletion}>{this.props.text}</span>
                        <span style={buttonStyles} onClick={this.handleDeleteClick}><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></span>
                        <span style={{...buttonStyles, backgroundColor: "yellow", marginLeft: "4px"}} onClick={this.handleEditClick}><FontAwesomeIcon icon={ faPencilAlt }></FontAwesomeIcon></span>
                    </div>
                    :
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>EditTodo</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Edit Todo"
                            value={this.state.text}
                            onChange = {this.handleChange}
                        />
                        <ButtonToolbar>
                            <Button variant="success" size="sm" onClick={this.handleSave}>Save</Button>
                            <Button variant="danger" size="sm" onClick={this.handleCancel}>Cancel</Button>
                        </ButtonToolbar>
                    </InputGroup>
                }
                </ListGroup.Item> 
            </div>
        )
    }
}

export default Todo;