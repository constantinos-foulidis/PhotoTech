import React from 'react';
//import { navigationToggleButton as NavigationToggleButton } from '../NavigationDrawer/NavigationDrawer'
//import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";
//import AppHeader from "../AppHeader/AppHeader";
import { navigationToggleButton as NavigationToggleButton } from '../NavigationPolites/navigationPolites';
import NavigationPolites from "../NavigationPolites/navigationPolites";
const greetingPolites = (props) => {
 console.log(props);
   //<NavigationDrawer/>
   //<NavigationToggleButton/>
    return (
      <>
      <div className="row ml-5">
      <NavigationPolites/>
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



export default greetingPolites;
