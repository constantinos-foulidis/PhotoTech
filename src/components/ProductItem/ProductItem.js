import React, { Component } from 'react';
import './ProductItem.css';
import Button from 'react-bootstrap/Button';
import ExporPDF from '../ExportTOPdf/ExportToPdf'
import ExportExcel from '../ExportTOExcel/ExportToExcel'
import ProductHeader from '../ProductHeader/ProductHeader';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    //  this.name = props.name;
    //  this.refe  = props.refe;
    console.log(props.refe);
  }

  handleSpecified = () => {
    // alert('A name was submitted: ' + this.state.username+this.state.password);
    //dad event.preventDefault();
    //console.log(event.preventDefault());
    this.props.history.push({
      pathname: "/products/id",
      //state: {username: this.state.username}
    });
  }

  render() {
    return (
      <div>
      <ProductHeader/>
          <ExporPDF/>
          <ExportExcel/>
    <div className="card cardWidth ml-5">
      <img className="card-img-top imgWidth" src="/PhotoSc.png"/>
      <div className="card-body">
        <h5 className="card-title">Φωτηστικο Τεστ</h5>
        <p className="card-text">Διαθεσημοτητα : 150</p>
        <p className="card-text border-bottom">Κωδικός : 123456</p>
        <Button className="buttonWidth mb-2" variant="info">Διαγραφή Προιόντος</Button>
        <Button className="buttonWidth mb-2" variant="info" onClick={this.handleSpecified}>Επεξεργασία αποθέματος</Button>
      </div>
    </div>
    </div>
    );
  }
}

export default ProductItem;
