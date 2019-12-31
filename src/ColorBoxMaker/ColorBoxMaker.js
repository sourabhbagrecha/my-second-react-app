import React, {Component} from 'react';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList';
import { Jumbotron, Container } from 'react-bootstrap';

class ColorBoxMaker extends Component{
    state={
        boxes: []
    }
    addBox = (box) => {
        this.setState(st => {return {boxes: [...st.boxes, box ]}});
    }
    removeBox = (id) => {
        this.setState(st => ({boxes: st.boxes.filter(b => b.id !== id)}))
    }
    render(){
        return(
            <Container style={{marginTop: "25px"}}>
                <Jumbotron><h1>The Color-Box Maker</h1></Jumbotron>
                <hr/>
                <NewBoxForm addBox={this.addBox} />
                <BoxList boxes={this.state.boxes} removeBox={this.removeBox} />
            </Container>
        )
    }
}

export default ColorBoxMaker;