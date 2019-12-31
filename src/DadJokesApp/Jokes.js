import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Joke from './Joke';

class Jokes extends Component{
    doRender = () => {
        return (this.props.jokes.map(j => <Joke 
            key={j.id}
            id={j.id} 
            text={j.text}
            votes={j.votes}
            vote={this.props.vote}
        />))
    }
    
    render(){
        return (
            <ListGroup>
                {this.doRender()}
            </ListGroup>
        )
    }
}

export default Jokes;