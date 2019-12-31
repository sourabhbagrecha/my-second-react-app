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
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/dice-app">
                                DiceApp          
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/color-boxes">
                                ColorBoxes       
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/color-box-maker">
                                ColorBoxMaker    
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/todo-app">
                                TodoApp          
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/game">
                                Yahtzee Game     
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/cards-game">
                                CardsGame        
                            </NavLink>
                            <NavLink exact className="nav-link" activeClassName="active-nav-link" to="/dad-jokes-app">
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