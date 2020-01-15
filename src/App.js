import React from 'react';
import './App.css';
import SelectorCards from './SelectorCards/SelectorCards';
import Resourceposition from './ProgramRecources/RecourcePlacement';
import Login from './Login/Login'
import Products from './ProductsRecources/ProductRecources'
import AddNewUser from './AddNewUser/AddNewUser';
import UserHandle from './UserHandler/UserHandler';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';



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

          <Route exact path="/" component={SelectorCards} />
          <Route path="/recource" component={Resourceposition}/>
          <Route path="/simple_user" component={Login}/>
          <Route path="/adduser" component={AddNewUser}/>
          <Route path="/handleuser" component={UserHandle}/>
          <Route path="/products" component={Products}/>
        </Router>
    </div>
  );
}

export default App;
