import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Box extends Component{
    handleClick = () => {
        this.props.removeBox(this.props.id)
    }
    render(){
        return(
            <div>
                <div style={{width: `${this.props.width}px`, height: `${this.props.height}px`, backgroundColor: this.props.backgroundColor}}></div>
                <Button onClick={this.handleClick}>X</Button>
            </div>
        )
    }
}

export default Box;