import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";
import Row from 'react-bootstrap/Row';
import HeaderGrafeioApp from "../GrafeioHeader/HeaderGrafeioApp";
import SellersHeader from "../SellersHeader/sellersHeader";
import { Switch,Route } from "react-router-dom";
const Sallers = (props) => {
 console.log(props);
    return (
      <>
      <HeaderGrafeioApp/>
      <div className="row ml-5">
       <SellersHeader/>
      </div>
      <Row>
        <Switch>
        <Route exact path="/office/sellers" component={SellersHeader}/>
        <Route  path="/office/sellers/add" component={SellersHeader}/>
        <Route  path="/office/sellers/id" component={SellersHeader}/>
        </Switch>
      </Row>
      </>
  );
}



export default Sallers;
