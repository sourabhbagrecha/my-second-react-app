import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import Jokes from './Jokes';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import './DadJokesApp.css'

class DadJokesApp extends Component{
    
    static defaultProps = {
        minJokes: 4
    }
    state = {
        jokes : JSON.parse(window.localStorage.getItem("Jokes") || "[]")
    }
    async componentDidMount(){
        try {
            while(this.state.jokes.length < this.props.minJokes){
                await this.loadNewJoke();
            }
        } catch (error) {
            console.log(error)
        }
    }
    loadNewJoke = async () =>  {
        let s = new Set(this.state.jokes.map(j => j.text));
        let text, joke;
        do{
            const response = await axios.get("https://icanhazdadjoke.com/", {headers: {"Accept": "application/json"}});
            text = response.data.joke;
            const id = uuid();
            joke = {text, id, votes: 0};
        }
        while(s.has(text))
        this.setState(st => ({ jokes: [...st.jokes, joke]}));
        window.localStorage.setItem("Jokes", JSON.stringify(this.state.jokes));
    }
    handleVote = (id, delta) => {
        this.setState(st => { 
            return {
                jokes: st.jokes.map(j => {
                    if(j.id === id){
                       if(delta){
                            return {...j, votes: j.votes+1};
                       } else {
                            return {...j, votes: j.votes-1};
                       }
                    }
                    return j;
                })
            }
        }, () => window.localStorage.setItem("Jokes", JSON.stringify(this.state.jokes)));
    }
    render(){
        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        return(
            <div className="DadJokesApp">
                <Container>
                    <Jumbotron className="DJA-jumbotron">
                        <h1><span className="DJA-text-first">The Dad</span> <span className="DJA-text-second">Jokes App</span></h1>
                        <Button className="DJA-new-button" style={{padding: "1rem 2rem"}} onClick={this.loadNewJoke}>Gimme a new Joke!</Button>
                    </Jumbotron>
                    {this.state.jokes.length !== 0  && <Jokes jokes={jokes} vote={this.handleVote}/>}
                </Container>
            </div>
        )
    }
}

export default DadJokesApp;