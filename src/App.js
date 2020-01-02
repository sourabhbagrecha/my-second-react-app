import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import DiceApp from './Dice App/DiceApp';
import ColorBoxes from './ColorBoxes/ColorBoxes';
import ColorBoxMaker from './ColorBoxMaker/ColorBoxMaker';
import TodoApp from './TodoApp/TodoApp';
import Game from './Yahtzee/Game';
import CardsGame from './CardsGame/CardsGame';
import DadJokesApp from './DadJokesApp';
import './App.css';
import HomePage from './HomePage/HomePage';
import diceAppImg from "./routeImages/dice-app.PNG"
import colorBoxesImg from "./routeImages/color-boxes.PNG"
import colorBoxMakerImg from "./routeImages/color-box-maker.PNG"
import todoAppImg from "./routeImages/todo-app.PNG"
import gameImg from "./routeImages/game.PNG"
import cardsGameImg from "./routeImages/cards-game.PNG"
import dadJokesAppImg from "./routeImages/dad-jokes-app.PNG"

class App extends Component {
  static defaultProps = {
    routes: [
      {path: "/dice-app"        , img: diceAppImg,         component: DiceApp},
      {path: "/color-boxes"     , img: colorBoxesImg,      component: ColorBoxes},
      {path: "/color-box-maker" , img: colorBoxMakerImg,  component: ColorBoxMaker},
      {path: "/todo-app"        , img: todoAppImg,         component: TodoApp},
      {path: "/game"            , img: gameImg,             component: Game},
      {path: "/cards-game"      , img: cardsGameImg,       component: CardsGame},
      {path: "/dad-jokes-app"   , img: dadJokesAppImg,    component: DadJokesApp}
    ]
  }
  render(){
    const {routes} = this.props;
    const routesRender = routes.map(r => <Route exact path={r.path} component={r.component}/>);
    return (
      <div className="App">
        <Layout>
          <Switch>
            {routesRender}
            <Route render={() => <HomePage {...this.props} /> }/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;