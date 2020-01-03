import React from 'react';
import './App.css';
import SelectorCards from './SelectorCards/SelectorCards';
import {
  BrowserRouter as Router,
  Swinpmtch,
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
      <h2 className="mb-5">Επιλέξτε Κατηγορία</h2>
      <SelectorCards/>
    </div>
  );
}

export default App;
