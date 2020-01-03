import React from 'react';
import './App.css';
import SelectorCards from './SelectorCards/SelectorCards';
import Resourceposition from './ProgramRecources/RecourcePlacement';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (

    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img className="headerpic" src="/PhotoSc.png"/>
      </header>
        <Router>
      <h2 className="mb-5">Επιλέξτε Κατηγορία</h2>
          <Route exact path="/" component={SelectorCards} />
          <Route path="/recource" component={Resourceposition}/>
          <Route path="/dashboard" component={Resourceposition}/>
        </Router>
    </div>
  );
}

export default App;
