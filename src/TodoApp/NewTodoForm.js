import React, {Component} from 'react';
import {Form, Button, Row, Col, } from 'react-bootstrap';
import uuid from 'uuid/v4';

class NewTodoForm extends Component{
    state = {
        text: ""
    }
    onSubmit = (e) => {
        e.preventDefault();
        const todo = {text: this.state.text, id: uuid(), completed: false};
        this.props.addTodo(todo);
        this.setState({text: ""})
    }
    onChange = (e) => {
        this.setState({text: e.target.value})
    }
    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control
                                    name="width"
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    placeholder="Type a todo!"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Form>
        )
    }
}

export default NewTodoForm;