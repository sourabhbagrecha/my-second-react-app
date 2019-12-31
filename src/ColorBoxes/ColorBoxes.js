import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component{
    static defaultProps = {
        colors: ["#393013","#7AC247","#DE9FDF","#1F1D58","#F1F1D5","#541C3E","#194D38","#282D77","#256F6A","#C14486","#0D0B22","#194116","#C16944","#7FCC66","#A240BF","#09101B","#5C2B1F","#7A7A7C"]
    }
    state = {
        boxes: Array.from({length: 18}).fill('white', 0, 18)
    }
    generateRandomColor = (curState) => {
        return { boxes: curState.boxes.map(b => this.props.colors[Math.floor(Math.random()*this.props.colors.length)])}
    }
    doRender = () => {
        console.log(this.state.boxes)
        this.setState(curState => this.generateRandomColor(curState));
    }
    componentDidMount = () => {
        this.doRender();
    }
    changeColor = (position) => {
        const copy = this.state.boxes;
        copy[position] = this.props.colors[Math.floor(Math.random()*this.props.colors.length)];
        this.setState({ boxes: copy });
    }
    render(){
        return(
            <div>
                <div className="Boxes-Container">
                    {this.state.boxes.map((b, i) => <Box key={i} index={i} color={b} changeColor={this.changeColor}  />)}
                </div>
                <Button onClick={this.doRender}>Refresh</Button>
            </div>
        )
    }
}

export default ColorBoxes;