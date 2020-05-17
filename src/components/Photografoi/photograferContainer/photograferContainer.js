import React from 'react';

import Row from 'react-bootstrap/Row';
import PhotograferAppHeader from "../PhotograferAppHeader/photograferAppHeader";
import { Switch,Route } from "react-router-dom";
import greetingPhotografer from "../GreetingPhotografer/greetingPhotografer";
import Rantevou from "../Rantevou/rantevou";
import Photografiseis from "../Photografiseis/photografiseis"
const PhotograferContainer = (props) => {
 console.log(props);
    return (
      <React.Fragment>
      <PhotograferAppHeader/>


      <Row>
        <Switch>
        <Route exact path="/photografer/greetings" component={greetingPhotografer} />
        <Route exact path="/photografer/rantevou" component={Rantevou} />
        <Route exact path="/photografer/photografiseis" component={Photografiseis} />
        </Switch>
      </Row>
      </React.Fragment>
  );
}



export default PhotograferContainer;
