import React from 'react';
import './App.css';
import SelectorCards from '../components/SelectorCards/SelectorCards';
import Resourceposition from '../components/ProgramRecources/RecourcePlacement';
import Login from '../components/Login/Login'
import Products from '../components/ProductsRecources/ProductRecources'

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
        <Route exact path="/" component={SelectorCards} />
        <Route path="/recource" component={Resourceposition} />
        <Route path="/simple_user" component={Login} />
        <Route path="/products" component={Products} />
      </Router>
    </div>
  );
}

export default App;
