import React from 'react';
import './App.css';
import UserCreate from "./screens/UserCreate/UserCreate"
import UserDisplay from "./screens/UserDisplay/UserDisplay"
import { Route, Switch } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import Matches from './screens/MatchChoice/Matches';
import Apps from './screens/Apps/Apps'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/usercreate" component={UserCreate} />
        <Route path="/userdisplay/:id" component={UserDisplay} />
        <Route path='/matchchoices' component={Matches} />
        <Route path='/apps' component={Apps} />
      </Switch>
    </div>
  );
}

export default App;

