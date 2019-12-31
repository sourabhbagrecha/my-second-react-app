import React, {Component} from 'react';
import Todo from './Todo';
import { ListGroup } from 'react-bootstrap';

class TodoList extends Component{
    removeTodo = (id) => {
        this.props.removeTodo(id);
    }
    editTodo = (todo) => {
        this.props.editTodo(todo);
    }
    render(){
        return(
            <ListGroup>
                {this.props.todos.map(t => <Todo key={t.id} text={t.text} id={t.id} completed={t.completed} removeTodo={this.removeTodo} editTodo={this.editTodo} />)}        
            </ListGroup>
        )
    }
}

export default TodoList;