import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home.js";
import LogIn from "./components/pages/LogIn.js";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" >
          <LogIn/>
        </Route>
        <Route path="/home" >
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App