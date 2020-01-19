import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Route } from "react-router-dom";
import NewItem from '../../../../components/AddnewItem/AddNewItem';
import AddNewUser from '../../User Management/AddNewUser/AddNewUser';
import NavigationDrawer from '../../../../components/NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import ProductSpecs from '../ProductDetails/ProductDetails';
import UserHandle from '../../User Management/UserHandler/UserHandler';
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
      <Row className="mb-4">
          <NavigationDrawer/>
      </Row>

      <Row>
        <Route exact path={this.props.match.url} component={ProductItem}/>
        <Route path={this.props.match.url + "/add"} component={NewItem}/>
        <Route path={this.props.match.url + "/id"} component={ProductSpecs}/>
        <Route path="/products/adduser" component={AddNewUser}/>
        <Route path="/products/handleuser" component={UserHandle}/>
      </Row>

    </Container>
    );
  }
}

export default Products;
