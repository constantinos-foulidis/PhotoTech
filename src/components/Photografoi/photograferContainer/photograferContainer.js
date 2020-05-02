import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";
import Row from 'react-bootstrap/Row';
import PhotograferAppHeader from "../PhotograferAppHeader/photograferAppHeader";
import { Switch,Route } from "react-router-dom";
import greetingPhotografer from "../GreetingPhotografer/greetingPhotografer";
const PhotograferContainer = (props) => {
 console.log(props);
    return (
      <>
      <PhotograferAppHeader/>
      <Row>
        <Switch>
        <Route exact path="/photografer/greetings" component={greetingPhotografer} />
        </Switch>
      </Row>
      </>
  );
}



export default PhotograferContainer;
