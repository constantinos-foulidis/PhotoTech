import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../NavigationDrawer/NavigationDrawer'
import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";
import AppHeader from "../AppHeader/AppHeader";

const greetingUser = (props) => {
 console.log(props);
    return (
      <>
      <AppHeader/>
      <div className="row ml-5">
          <NavigationDrawer/>
        <div className="col-2">
      <NavigationToggleButton/>
      </div>
      <div className="col">
      <div className="greetingMessage">Καλωσήρθες {JSON.parse(localStorage.getItem('userName'))}! </div>
      </div>
      </div>
      </>
  );
}



export default greetingUser;
