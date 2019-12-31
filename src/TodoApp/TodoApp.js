import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import { Container, Jumbotron } from 'react-bootstrap';

class TodoApp extends Component{
    state = {
        todos: []
    }
    addTodo = (todo) => {
        this.setState(st => ({todos: [...st.todos, todo]}))
    }
    removeTodo = (id) => {
        this.setState(st => ({todos: st.todos.filter(t => t.id !== id)}))
    }
    editTodo = (todo) => {
        const updatedTodos = this.state.todos.map( t => {
            if(t.id === todo.id){
                return todo
            } else {
                return t
            }
        })
        this.setState({todos: updatedTodos});
    }
    render(){
        return(
            <Container style={{marginTop: "25px"}}>
                <Jumbotron>
                    <h1>The To-do-apP</h1>
                </Jumbotron>
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo} editTodo={this.editTodo} />
                <hr/>
                <NewTodoForm addTodo={this.addTodo}/>
            </Container>
        )
    }
}

export default TodoApp;