import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";
import Row from 'react-bootstrap/Row';
import HeaderGrafeioApp from "../GrafeioHeader/HeaderGrafeioApp";
import SellersHeader from "../SellersHeader/sellersHeader";
import SallersContent from "../Sallers/SallersContent";
import Pellates from "../PellatesUnderSaller/Pellates";
import AddNewPellath from "../Pellatologio/addNewPellath";
import Pellatologio from "../Pellatologio/Pellatologio";
import NeoiPellates from "../PellatesUnderSaller/NeoiPellates";
import PellatesGrafeiou from "../Pellates/PellatesGrafeiou";
import ProductsGrafeiou from "../Products/ProductsGrafeiou";
import PliromesPoliton from "./PliromesPoliton";
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
        <Route  exact path="/office/sellers" component={SallersContent}/>
        <Route  exact path="/office/sellers/Pellates" component={Pellates}/>
        <Route  exact path="/office/sellers/NeoiPellates" component={NeoiPellates}/>
        <Route  exact path="/office/sellers/pliromesPoliton" component={PliromesPoliton}/>
        <Route  exact path="/office/ProductsGrafeiou" component={ProductsGrafeiou}/>
        <Route  path="/office/sellers/add" component={SellersHeader}/>
        <Route  path="/office/sellers/id" component={SellersHeader}/>
        <Route  exact path="/office/pellatologio" component={Pellatologio}/>
        <Route  exact path="/office/addNewScool" component={AddNewPellath}/>
          <Route  exact path="/office/PellatesGrafeiou" component={PellatesGrafeiou}/>

        </Switch>
      </Row>
      </>
  );
}



export default Sallers;
