import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import ProductSpecs from '../ProductSpecks/ProductSpecks';
import Container from 'react-bootstrap/Container'
import ExporPDF from '../ExportTOPdf/ExportToPdf'
import ExportExcel from '../ExportTOExcel/ExportToExcel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
  //  if(!this.props.location.state.username){
  //  const state = this.props.location.state.username;
  //  console.log(state);
//}
  }

  render() {
    return (<Container className="bg-white">
      <Row>
        <Col className="col-1">
          <NavigationDrawer/>
        </Col>
        <Col>
          <h1>Προιόντα:</h1>
        </Col>
      </Row>
      
      <Row className="offset-1" >
        <Dropdawn name="Προιόντα φωτογραφίας"/>
        <Dropdawn name="Δώρα"/>
        <Dropdawn name="Υλικα Εργαστηρίου"/>
        <Dropdawn name="Προσθήκη νέου"/>
      </Row>
      <Row >
      <Col className="offset-7">
      <ExporPDF/>
      <ExportExcel/>
      </Col>
      </Row>
      <Row className="offset-1">
      <Router>
        <Route exact path="/products" component={ProductItem}/>
        <Route exact path="/products/id" component={ProductSpecs}/>
      </Router>
      </Row>
    </Container>);
  }
}

export default Products;
