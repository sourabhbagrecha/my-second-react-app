import React, { Component } from 'react';
import Card from './Card';
import './Cards.css'

class Cards extends Component{
    render(){
        return (
            <div className="Cards" style={{position: "relative", width: "900px", height: '900px', margin: "0 auto"}}>
                {this.props.cards.map((c, i) => <Card src={c.image} key={c.code} index={i}/>)}
            </div>
        )
    }
}

export default Cards;