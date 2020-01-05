import React, { Component } from 'react';
import '../ProductItem/ProductItem.css';

class ProductItem extends Component {
  constructor(props){
    super();
    this.name = props.name;
    this.refe  = props.refe;
    console.log(props.refe);
  }
  render () {
    return (
      <div className="card cardWidth">
         <img className="card-img-top imgWidth " src="/PhotoSc.png"/>
          <div className="card-body">
          <h5 className="card-title">Φωτηστικο Τεστ</h5>
          <p className="card-text">Διαθεσημοτητα : 150</p>
          <p className="card-text border-bottom">Κωδικός : 123456</p>
          <a href="#" className="buttonWidth btn btn-primary mb-2">Go somewhere</a>
          <a href="#" className="buttonWidth btn btn-primary">Go somewhere</a>
          </div>
      </div>

    );
  }
}

export default ProductItem;
