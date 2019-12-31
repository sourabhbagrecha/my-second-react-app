import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import './CardsGame.css';

class CardsGame extends Component{
    state = {
        deck_id: '',
        cards: [],
        remaining: 0,
        loading: false
    }
    async componentDidMount(){
        const response = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/`);
        const { deck_id, remaining } = response.data;
        this.setState({ deck_id, remaining })
        console.log(deck_id)
        console.log(this.state);
    }
    handleClick = () => {
        this.setState(st => ({loading: !st.loading}))
        setTimeout(this.addCard, 150)
    }
    addCard = async () => {
        if(this.state.remaining > 0){
            const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
            const { code, value, suit, image} = response.data.cards[0];
            const { remaining } = response.data;
            const card = { code, value, suit, image };
            this.setState(st => {
                return { cards: [...st.cards, card], remaining, loading: !st.loading }
            })
        } else {
            alert("We are out of cards!")
        }
    }
    render(){
        return (
            <Container style={{marginTop: "2rem"}}>
                <Jumbotron style={{padding: "1rem", minHeight: "5rem"}}>
                    <h1 style={{textAlign: "center"}}>
                        <span class="CG-title">The Cards game app</span>
                        <Button 
                            className="CG-btn"
                            onClick={this.handleClick} 
                            disabled={this.state.loading}>Deal me a Card!</Button>
                    </h1>
                </Jumbotron>
                <Cards cards={this.state.cards}/>
            </Container>
        )
    }
}

export default CardsGame;