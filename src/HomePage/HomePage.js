import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import RouteDisplay from './RouteDisplay'

class HomePage extends Component {
    render() {
        const items = this.props.routes.map(i => <Col md={4} sm={12}><RouteDisplay {...i}>{i.path}</RouteDisplay></Col>)
        return (
            <Container>
                <h1 style={{textAlign: "center", color: "white", fontSize: "4rem", fontFamily: 'Roboto', fontWeight: '700'}}>The Gigantic React App</h1>
                <Row>
                    {items}
                </Row>
            </Container>
        )
    }
}

export default HomePage