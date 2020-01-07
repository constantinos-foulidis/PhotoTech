import React, { Component } from 'react';
import '../ProductItem/ProductItem.css';
import Button from 'react-bootstrap/Button';

class ProductItem extends Component {
  constructor(props){
    super();
    this.name = props.name;
    this.refe  = props.refe;
    console.log(props.refe);
  }
  render () {
    return (
      <div className="card cardWidth ml-5">
         <img className="card-img-top imgWidth" src="/PhotoSc.png"/>
          <div className="card-body">
          <h5 className="card-title">Φωτηστικο Τεστ</h5>
          <p className="card-text">Διαθεσημοτητα : 150</p>
          <p className="card-text border-bottom">Κωδικός : 123456</p>
          <Button className="buttonWidth mb-2" variant="info">Διαγραφή Προιόντος</Button>
          <Button className="buttonWidth mb-2" variant="info">Επεξεργασία αποθέματος</Button>
          </div>
      </div>

    );
  }
}

export default ProductItem;
