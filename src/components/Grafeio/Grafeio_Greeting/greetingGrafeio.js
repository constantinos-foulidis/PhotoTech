import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";

const greetingGrafeio = (props) => {

    return (
      <>

      <div className="row ml-5">
          <NavigationGrafeio/>
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



export default greetingGrafeio;
