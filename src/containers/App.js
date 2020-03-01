import React from "react";
import "./App.css";
import MainMenu from "./MainMenu/MainMenu";
import ResourceProgramMenu from "./ResourceProgram/ResourceProgramMenu/ResourceProgramMenu";
import Login from "../components/Login/Login";
import LoginGrafeiou from "../components/LoginGrafeiou/LoginGrafeiou";
import greetingGrafeio from "../components/Grafeio/Grafeio_Greeting/greetingGrafeio";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/recource" component={ResourceProgramMenu} />
          <Route exact path="/office" component={LoginGrafeiou} />
            <Route exact path="/office/greeting" component={greetingGrafeio} />
          <Route path="/simple_user" component={Login} />
          <Route component={(props) => <p>Page Not Found</p>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
