import React, { Component } from 'react';
import './ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import NewItem from '../AddnewItem/AddNewItem';
import ProductSpecs from '../../ProductSpecks/ProductSpecks';
import Container from 'react-bootstrap/Container';
import AddNewUser from '../AddNewUser/AddNewUser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Route } from "react-router-dom";
import UserHandle from '../UserHandler/UserHandler'
import Category from '../../Data/Category'

class Products extends Component {

  handleAddnew = () => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/products/add",
    });

  }

  render() {

    return (
      <Container className="bg-white">
        <Row>
          <Col className="col-1">
            <NavigationDrawer />
          </Col>
          <Col>
            <h1>Προιόντα:</h1>
          </Col>
        </Row>
        <Row className="offset-1">
          {Category.map((category, index) => (<Dropdawn key={category.name} category={category} />))}
          <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Προσθήκη νέου</Button>
        </Row>
        <Row className="offset-1">
          <Route exact path="/products" component={ProductItem} />
          <Route path="/products/add" component={NewItem} />
          <Route path="/products/id" component={ProductSpecs} />
          <Route path="/products/adduser" component={AddNewUser} />
          <Route path="/products/handleuser" component={UserHandle} />
        </Row>
      </Container>
    );
  }
}

export default Products;
