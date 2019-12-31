import React, {Component} from 'react';
import './Die.css';

class Die extends Component{
    state = {
        number: 0
    }
    static defaultProps = {
        num : ['zero', 'one', 'two', 'three', 'four', 'five', 'six']
    }
    convertNumtoIcon = () => {
        return `fas fa-dice-${this.props.num[this.props.face]} Die-Icon ${this.props.rolling && 'rolling'}`
    }
    render(){
        return (
            <div className="Die">
                <i className={ this.convertNumtoIcon() } style={{ fontSize: '9rem', color: '#be4bdb'}}>
                </i>
            </div>
        )
    }
}

export default Die;