import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component{
    removeBox = (id) => {
        this.props.removeBox(id);
    }
    render(){

        return ( 
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {this.props.boxes.map(b => <Box key={b.id} id={b.id} width={b.width} height={b.height} backgroundColor={b.backgroundColor} removeBox={this.removeBox} />) }
            </div>
        );
    }
}

export default BoxList;