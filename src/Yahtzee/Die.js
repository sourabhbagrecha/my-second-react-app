import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, } from '@fortawesome/free-solid-svg-icons';  

class Die extends Component {
  static defaultProps = {
    dieNames : ['zero', faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix],
    val : 5
  }
  render() {
    return (
        !this.props.val ? null :
        <button
          className={`${this.props.locked ? "Die-locked" : "" } fas fa-5x ${this.props.rolling ? "Die-rolling" : "" }`}
          onClick={() => this.props.handleClick(this.props.idx)}
        >
          <FontAwesomeIcon icon={this.props.dieNames[this.props.val]}></FontAwesomeIcon>
        </button>
    );
  }
}

export default Die;
