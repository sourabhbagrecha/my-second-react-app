import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faAngry, faFrown, faFrownOpen, faMeh, faMehBlank, faGrimace, faGrin, faLaugh, faLaughBeam, faGrinBeam, faGrinHearts, faGrinTears, faGrinSquintTears } from '@fortawesome/free-solid-svg-icons'; 
import './Joke.css';
class Joke extends Component{
    static defaultProps = {
        emojis : [faAngry, faFrown, faFrownOpen, faMeh, faMehBlank, faGrimace, faGrin, faLaugh, faLaughBeam, faGrinBeam, faGrinHearts, faGrinTears, faGrinSquintTears],
        colors: ["#393013","#7AC247","#DE9FDF","#1F1D58","#F1F1D5","#541C3E","#194D38","#282D77","#256F6A","#C14486","#0D0B22","#194116","#C16944"]
    }
    handleUpvote = () => {
        this.props.vote(this.props.id, true)
    }
    handleDownvote = () => {
        this.props.vote(this.props.id, false)
    }
    emojiSelector = (x) => {
        let z = 0;
        if(x<-4) z=0;
        else if(x>-4 && x<=8) z=x+4;
        else if(x>8) z=12
        else z=0
        console.log(z)
        return {emoji: this.props.emojis[z], color: this.props.colors[z]}
    }
    render(){
        console.log(this.emojiSelector(this.props.votes))
        return <div style={{ margin: "10px"}}>
                    <ListGroup.Item className="DJA-joke" key={this.props.id}>
                        <Row>
                            <Col xs={4} sm={3} lg={2}>
                                <FontAwesomeIcon className="vote-action downvote" style={{fontSize: "1.4rem"}} icon={faArrowDown} onClick={this.handleDownvote}></FontAwesomeIcon> &nbsp;
                                <span style={{fontSize: "0.9rem", marginBottom: "0.4rem"}} className="fa-stack">
                                    <i className="fa fa-circle-o fa-stack-2x"></i>
                                    <strong className="fa-stack-1x">{this.props.votes}</strong>
                                </span> &nbsp;
                                <FontAwesomeIcon className="vote-action upvote" style={{fontSize: "1.4rem"}} icon={faArrowUp} onClick={this.handleUpvote}></FontAwesomeIcon>
                            </Col>
                            <Col xs={7} sm={8} lg={9}>
                                {this.props.text}
                            </Col>
                            <Col xs={1}>
                                <FontAwesomeIcon className="fa-2x" style={{color: this.emojiSelector(this.props.votes).color}} icon={this.emojiSelector(this.props.votes).emoji}/>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </div>
    }
}

export default Joke