import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Route } from "react-router-dom";
import NewItem from '../AddnewItem/AddNewItem';
import NavigationDrawer from '../../../../components/NavigationDrawer/NavigationDrawer';
import ProductItems from '../ProductItems/ProductItems';

import ProductSpecs from '../ProductDetails/ProductDetails';
import './ProductRecources.css';

class Products extends Component {

  handleAddnew = () => {

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
        <Route exact path={this.props.match.url} component={ProductItems}/>
        <Route path={this.props.match.url + "/add"} component={NewItem}/>
        <Route path={this.props.match.url + "/id"} component={ProductSpecs}/>
      </Row>

    </Container>
    );
  }
}

export default Products;
