import React from 'react';
import './DiceApp.css'
import Die from './Die/Die';
import {Button} from 'react-bootstrap';

class DiceApp extends React.Component{
    state={
        num1: 6,
        num2: 6,
        rolling: false
    }
    roll = () => {
        const num1 = Math.ceil(Math.random() * 6);
        let num2 = Math.ceil(Math.random() * 6);
        while(num1 === num2){
            num2 = Math.ceil(Math.random() * 6)
        }
        this.setState({num1, num2, rolling: true});
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render(){
        return (
            <div className="DiceApp">
                <h1>Dice Roller</h1>
                <div className="DiceApp-Dice-Container">
                    <Die face={this.state.num1} rolling={this.state.rolling}/>
                    <Die face={this.state.num2} rolling={this.state.rolling}/>
                </div>
        <Button onClick={this.roll} disabled={this.state.rolling && true} variant='primary' className="DiceRoller-Button">{this.state.rolling ? 'Rolling...' : 'Roll The Dice!'}</Button>
            </div>
        )
    }
}

export default DiceApp;