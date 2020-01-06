import React, {Component} from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';
import Dropdawn from '../Dropdawn/Dropdawn';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Products extends Component {
  constructor(props) {
    super(props);
    const state = this.props.location.state.username;
    console.log(state);

  }
  render() {
    return (<Container>
      <Row>
        <Col>
          <h1>Προιόντα:</h1>
          <NavigationDrawer/>
        </Col>
      </Row>
      <Row className="">
        <Dropdawn/>
        <Dropdawn/>
        <Dropdawn/>
        <Dropdawn/>

      </Row>
      <Row>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </Row>
      <p>Hello {this.state}</p>
    </Container>);
  }
}

export default Products;
