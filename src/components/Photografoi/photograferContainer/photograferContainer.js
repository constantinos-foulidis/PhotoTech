import React from 'react';

import Row from 'react-bootstrap/Row';
import PhotograferAppHeader from "../PhotograferAppHeader/photograferAppHeader";
import { Switch,Route } from "react-router-dom";
import greetingPhotografer from "../GreetingPhotografer/greetingPhotografer";
import Rantevou from "../Rantevou/rantevou";
const PhotograferContainer = (props) => {
 console.log(props);
    return (
      <React.Fragment>
      <PhotograferAppHeader/>


      <Row>
        <Switch>
        <Route exact path="/photografer/greetings" component={greetingPhotografer} />
        <Route exact path="/photografer/rantevou" component={Rantevou} />
        </Switch>
      </Row>
      </React.Fragment>
  );
}



export default PhotograferContainer;
