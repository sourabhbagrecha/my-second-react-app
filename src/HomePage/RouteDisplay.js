import React, { PureComponent } from 'react';
import './RouteDisplay.css'
import { Link } from 'react-router-dom';

class RouteDisplay extends PureComponent {
    render() {
        const { img, path } = this.props;
        console.log(img)
        return (
            <Link to={path}>
                <div className="RouteDisplay">
                    <img src={img} alt="mjnhbvf" style={{height:"100%", width:"100%"}}/>
                </div> 
            </Link>           
        )
    }
}

export default RouteDisplay