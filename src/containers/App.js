import React from "react";
import "./App.css";
import MainMenu from "./MainMenu/MainMenu";
import ResourceProgramMenu from "./ResourceProgram/ResourceProgramMenu/ResourceProgramMenu";
import Login from "../components/Login/Login";
import AppHeader from "../components/AppHeader/AppHeader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <AppHeader/>
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/recource" component={ResourceProgramMenu} />
          <Route path="/simple_user" component={Login} />
          <Route component={(props) => <p>Page Not Found</p>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
