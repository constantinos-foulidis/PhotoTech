import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import NewItem from '../AddnewItem/AddNewItem';
import ProductSpecs from '../ProductSpecks/ProductSpecks';
import Container from 'react-bootstrap/Container'
import ExporPDF from '../ExportTOPdf/ExportToPdf'
import ExportExcel from '../ExportTOExcel/ExportToExcel'
import AddNewUser from '../AddNewUser/AddNewUser'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import NavigateButton from '../NavigateButton/NavigateButton';
import {BrowserRouter as Router, Route,Switch,withRouter } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    //  if(!this.props.location.state.username){
    //  const state = this.props.location.state.username;
    //  console.log(state);
    //}
  }
  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/products/add",
      //state: {username: this.state.username}
    });
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
      <Row className="offset-1">
        <Dropdawn name="Προιόντα φωτογραφίας"/>
        <Dropdawn name="Δώρα"/>
        <Dropdawn name="Υλικα Εργαστηρίου"/>
        <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Προσθήκη νέου</Button>
      </Row>
      <Row >
        <Col className="offset-7">
          <ExporPDF/>
          <ExportExcel/>
        </Col>
      </Row>

      <Row className="offset-1">

          <Route exact path="/products" component={withRouter(ProductItem)}/>
          <Route  path="/products/add" component={withRouter(NewItem)}/>
          <Route path="/products/id" component={withRouter(ProductSpecs)}/>
          <Route  path="/products/adduser" component={withRouter(AddNewUser)}/>
      
      </Row>

    </Container>);
  }
}

export default Products;
