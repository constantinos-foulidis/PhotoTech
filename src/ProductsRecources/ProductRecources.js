import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import NewItem from '../AddnewItem/AddNewItem';
import ProductSpecs from '../ProductSpecks/ProductSpecks';
import Container from 'react-bootstrap/Container';
import AddNewUser from '../AddNewUser/AddNewUser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavigateButton from '../NavigateButton/NavigateButton';
import {Route} from "react-router-dom";
import UserHandle from '../UserHandler/UserHandler'
import Category from '../Data/Category'
class Products extends Component {
  constructor(props) {
    super(props);
    //  if(!this.props.location.state.username){
    //  const state = this.props.location.state.username;
    //  console.log(state);
    //}

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

    </Container>);
  }
}

export default Products;
