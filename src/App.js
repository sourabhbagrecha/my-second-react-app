import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/dice-app"         component={DiceApp}/>
          <Route exact path="/color-boxes"      component={ColorBoxes}/>
          <Route exact path="/color-box-maker"  component={ColorBoxMaker}/>
          <Route exact path="/todo-app"         component={TodoApp}/>
          <Route exact path="/game"             component={Game}/>
          <Route exact path="/cards-game"       component={CardsGame}/>
          <Route exact path="/dad-jokes-app"    component={DadJokesApp}/>
          <Route render={() => <h1>{"{err: 404, msg: Page Not Found}"}</h1>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
