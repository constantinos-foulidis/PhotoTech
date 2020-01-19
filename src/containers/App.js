import React from 'react';
import './App.css';
import MainMenu from './MainMenu/MainMenu';
import ResourceProgramMenu from './ResourceProgram/ResourceProgramMenu/ResourceProgramMenu';
import Login from '../components/Login/Login'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (

    <div className="App">
      <header className="App-header shadow p-3 mb-5 ">
        <img alt="logo" className="headerpic" src="/PhotoSc.png" />
      </header>
      <Router>
        <Route exact path="/" component={MainMenu} />
        <Route path="/recource" component={ResourceProgramMenu} />
        <Route path="/simple_user" component={Login} />
        <Route render={()=><p>Page Not Found</p>} />
      </Router>
    </div>
  );
}

export default App;
