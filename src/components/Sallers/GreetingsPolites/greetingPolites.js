import React from 'react';
//import { navigationToggleButton as NavigationToggleButton } from '../NavigationDrawer/NavigationDrawer'
//import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";
//import AppHeader from "../AppHeader/AppHeader";
//import { navigationToggleButton as NavigationToggleButton } from '../NavigationPhotografers/NavigationPhotografers'
//import NavigationPhotografers from "../NavigationPhotografers/NavigationPhotografers";
const greetingPolites = (props) => {
 console.log(props);
   //<NavigationDrawer/>
   //<NavigationToggleButton/>
    return (
      <>
      <div className="row ml-5">

        <div className="col-2">
      
      </div>
      <div className="col">
      <div className="greetingMessage">Καλωσήρθες {JSON.parse(localStorage.getItem('userName'))}! </div>
      </div>
      </div>

      </>
  );
}



export default greetingPolites;
