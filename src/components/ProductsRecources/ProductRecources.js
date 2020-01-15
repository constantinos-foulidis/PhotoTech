import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Route } from "react-router-dom";

import Category from '../../Data/Category';
import NewItem from '../AddnewItem/AddNewItem';
import AddNewUser from '../AddNewUser/AddNewUser';
import Dropdawn from '../Dropdawn/Dropdawn';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import ProductSpecs from '../ProductSpecks/ProductSpecks';
import UserHandle from '../UserHandler/UserHandler';
import './ProductRecources.css';

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
      <Row className="mb-5">
          <NavigationDrawer/>
      </Row>

      <Row>
        <Route exact path="/products" component={ProductItem}/>
        <Route path="/products/add" component={NewItem}/>
        <Route path="/products/id" component={ProductSpecs}/>
        <Route path="/products/adduser" component={AddNewUser}/>
        <Route path="/products/handleuser" component={UserHandle}/>
      </Row>

    </Container>
    );
  }
}

export default Products;
