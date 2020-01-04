import React, { Component } from 'react';
import '../ProductsRecources/ProductRecources.css';

class Products extends Component {
  constructor(props){
    super(props);
    const state = this.props.location.state.username;
    console.log(state);

  }
  render () {
    return (
          <p>Hello {this.state}</p>
    );
  }
}

export default Products;
