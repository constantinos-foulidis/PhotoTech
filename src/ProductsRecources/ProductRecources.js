import React, { Component } from 'react';
import '../ProductsRecources/ProductRecources.css';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ProductItem from '../ProductItem/ProductItem';

class Products extends Component {
  constructor(props){
    super(props);
    const state = this.props.location.state.username;
    console.log(state);

  }
  render () {
    return (
          <div>
          <NavigationDrawer/>
          <ProductItem/>
          <p>Hello {this.state}</p>
          </div>
    );
  }
}

export default Products;
