import React from 'react';
import { navigationToggleButton as NavigationToggleButton } from '../../Grafeio/NavigationGrafeio/NavigationGrafeio'
import NavigationGrafeio from "../../Grafeio/NavigationGrafeio/NavigationGrafeio";
import HeaderGrafeioApp from "../GrafeioHeader/HeaderGrafeioApp";
import SellersHeader from "../SellersHeader/sellersHeader";
const Sallers = (props) => {
 console.log(props);
    return (
      <>
      <HeaderGrafeioApp/>
      <div className="row ml-5">

       <SellersHeader/>
    
      </div>
      </>
  );
}



export default Sallers;
