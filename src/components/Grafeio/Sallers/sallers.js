import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";
import Row from 'react-bootstrap/Row';
import HeaderGrafeioApp from "../GrafeioHeader/HeaderGrafeioApp";
import SellersHeader from "../SellersHeader/sellersHeader";
import SallersContent from "../Sallers/SallersContent";
import { Switch,Route } from "react-router-dom";
import greetingGrafeio from "../Grafeio_Greeting/greetingGrafeio";
const Sallers = (props) => {
 console.log(props);
    return (
      <>
      <HeaderGrafeioApp/>
      <Row>
        <Switch>
        <Route exact path="/office/sellers/greeting" component={greetingGrafeio} />
        <Route  path="/office/sellers" component={SallersContent}/>
        <Route  path="/office/sellers/add" component={SellersHeader}/>
        <Route  path="/office/sellers/id" component={SellersHeader}/>
        </Switch>
      </Row>
      </>
  );
}



export default Sallers;
