import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../NavigationDrawer/NavigationDrawer'
import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";

const greetingUser = (props) => {
 console.log(props);
    return (
      <div className="row ml-5">
          <NavigationDrawer/>
        <div className="col-2">
      <NavigationToggleButton/>
      </div>
      <div className="col">
      <h1>Καλωσόρισες  : {JSON.parse(localStorage.getItem('userName'))}</h1>
      </div>
      </div>
  );
}



export default greetingUser;
