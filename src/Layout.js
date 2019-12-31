import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Layout.css'

class Layout extends Component{
    render(){
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand>The Gigantic React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/dice-app">
                                DiceApp          
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/color-boxes">
                                ColorBoxes       
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/color-box-maker">
                                ColorBoxMaker    
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/todo-app">
                                TodoApp          
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/game">
                                Yahtzee Game     
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/cards-game">
                                CardsGame        
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/my-second-react-app/dad-jokes-app">
                                DadJokesApp      
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;