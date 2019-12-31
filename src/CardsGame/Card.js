import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <img src={this.props.src} alt={this.props.code} style={{zIndex: this.props.index, transform: `rotate(${this.props.index*23}deg) translate(${this.props.index*5}px, ${this.props.index*5}px)`, position: "absolute", top: "300px", left: "300px"}}/>
        )
    }
}

export default Card;