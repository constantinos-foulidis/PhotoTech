import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import Container from 'react-bootstrap/Container'
import ExporPDF from '../ExportTOPdf/ExportToPdf'
import ExportExcel from '../ExportTOExcel/ExportToExcel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Products extends Component {
  constructor(props) {
    super(props);
    const state = this.props.location.state.username;
    console.log(state);

  }
  render() {
    return (<Container className="bg-white">
      <Row>
        <Col>
          <h1>Προιόντα:</h1>
          <NavigationDrawer/>
        </Col>
      </Row>
      <Row className="offset-1" >
        <Dropdawn name="Προιόντα φωτογραφίας"/>
        <Dropdawn name="Δώρα"/>
        <Dropdawn name="Υλικα Εργαστηρίου"/>
        <Dropdawn name="Προσθήκη νέου"/>
      </Row>
      <Row >
      <Col className="offset-5">
      <ExporPDF/>
      <ExportExcel/>
      </Col>
      </Row>
      <Row className="offset-1">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </Row>
    </Container>);
  }
}

export default Products;
