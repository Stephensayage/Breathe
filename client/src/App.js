import React, { useState }from 'react';
import './App.css';
import Home from "./screens/Home/Home"
import UserCreate from "./screens/UserCreate/UserCreate"
import UserDisplay from "./screens/UserDisplay/UserDisplay"
import UserEdit from "./screens/UserEdit/UserEdit"
import { Route, Switch, useParams, withRouter } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
import Matches from './screens/MatchChoice/Matches';
import Apps from './screens/Apps/Apps'


function App(props) {

  let id = props.location.pathname

  return (
      
    <div className="App">
      <Switch>
        <Route exact path={id.includes('5') ? '/:id' : '/'} component={Home} />
        <Route exact path="/usercreate" component={UserCreate} />
        <Route path="/userdisplay/:id" component={UserDisplay} />
        <Route path='/matchchoices/:id' component={Matches} />
        <Route path='/apps/:id' component={Apps} />
        <Route path='/user/:id/edit' component={UserEdit} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

