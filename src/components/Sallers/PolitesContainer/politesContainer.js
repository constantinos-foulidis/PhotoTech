import React from 'react';

import Row from 'react-bootstrap/Row';
import PolitesHeader from "../PolitesHeader/politesHeader";
import { Switch,Route } from "react-router-dom";
import greetingPolites from "../GreetingsPolites/greetingPolites";
import RantevouPoliton from "../RantevouPoliton/rantevouPoliton";
const PolitesContainer = (props) => {
 console.log(props);
    return (
      <React.Fragment>
      <PolitesHeader/>


      <Row>
        <Switch>
        <Route exact path="/sellers/greetings" component={greetingPolites} />
        <Route exact path="/sellers/rantevou" component={RantevouPoliton} />

        </Switch>
      </Row>
      </React.Fragment>
  );
}
//TODO ADD NAVIGATION AND ALL NEEDED COMPONENTS
// <Route exact path="/sellers/rantevou" component={Rantevou} />
// <Route exact path="/sellers/photografiseis" component={Photografiseis} />


export default PolitesContainer;
