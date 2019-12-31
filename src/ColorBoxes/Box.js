import React, {Component} from 'react';

class Box extends Component{
    handleHover = () => {
        this.props.changeColor(this.props.index);
    }
    render(){
        return (
            <div onMouseOver={this.handleHover} style={{backgroundColor: this.props.color, width: "16.455vw", height: "16.455vw"}}>
            </div>
        )
    }
}

export default Box;