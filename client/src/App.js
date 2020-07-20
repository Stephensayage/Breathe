import React from 'react';
import './App.css';
import UserCreate from "./screens/UserCreate/UserCreate"
import UserDisplay from "./screens/UserDisplay/UserDisplay"
import { Route , Switch, Router} from "react-router-dom"
import Confidentiality from "./screens/Confidentiality/Confidentiality"
import 'bootstrap/dist/css/bootstrap.min.css';
import Confidentiality from "../src/screens/Confidentiality/Confidentiality"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/usercreate" component={UserCreate} />
        <Route exact path="/userdisplay" component={UserDisplay} />
      
      </Switch> 
    </div>
  );
}

export default App;
