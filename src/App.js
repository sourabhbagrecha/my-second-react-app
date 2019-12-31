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
          <Route exact path="/my-second-react-app/dice-app"         component={DiceApp}/>
          <Route exact path="/my-second-react-app/color-boxes"      component={ColorBoxes}/>
          <Route exact path="/my-second-react-app/color-box-maker"  component={ColorBoxMaker}/>
          <Route exact path="/my-second-react-app/todo-app"         component={TodoApp}/>
          <Route exact path="/my-second-react-app/game"             component={Game}/>
          <Route exact path="/my-second-react-app/cards-game"       component={CardsGame}/>
          <Route exact path="/my-second-react-app/dad-jokes-app"    component={DadJokesApp}/>
          <Route render={() => <h1>{"{err: 404, msg: Page Not Found}"}</h1>}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
