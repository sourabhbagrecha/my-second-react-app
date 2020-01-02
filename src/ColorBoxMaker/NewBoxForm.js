import React, {Component} from 'react';
import { Container, Button, Form, Col, Row } from 'react-bootstrap';
import uuid from 'uuid/v4';

class NewBoxForm extends Component{
    state= {
        width: '300',
        height: '200',
        backgroundColor: '#00ffff',
    }

    onChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const { width, height, backgroundColor } = this.state;
        const box = { width, height, backgroundColor, id: uuid()};
        this.props.addBox(box);
    }
    render(){
        return(
            <Container style={{ marginTop: "50px"}}>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Width</Form.Label>
                                <Form.Control
                                    name="width"
                                    value={this.state.width}
                                    onChange={this.onChange}
                                    placeholder="px"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Height</Form.Label>
                                <Form.Control
                                    name="height"
                                    value={this.state.height}
                                    onChange={this.onChange}
                                    placeholder="px"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Background Color</Form.Label>
                                <Form.Control
                                    name="backgroundColor"
                                    type="color"
                                    value={this.state.backgroundColor}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default NewBoxForm;