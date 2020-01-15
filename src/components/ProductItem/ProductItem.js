import React from 'react';
import './ProductItem.css';
import Button from 'react-bootstrap/Button';
import ExporPDF from '../ExportTOPdf/ExportToPdf'
import ExportExcel from '../ExportTOExcel/ExportToExcel'

const productItem = (props) => {
  const handleSpecified = () =>
    props.history.push({
      pathname: "/products/id",
    });

  return (
    <div>
      <ExporPDF />
      <ExportExcel />
      <div className="card cardWidth ml-5">
        <img alt="logo" className="card-img-top imgWidth" src="/PhotoSc.png" />
        <div className="card-body">
          <h5 className="card-title">Φωτηστικο Τεστ</h5>
          <p className="card-text">Διαθεσημοτητα : 150</p>
          <p className="card-text border-bottom">Κωδικός : 123456</p>
          <Button className="buttonWidth mb-2" variant="info">Διαγραφή Προιόντος</Button>
          <Button className="buttonWidth mb-2" variant="info" onClick={ handleSpecified }>Επεξεργασία αποθέματος</Button>
        </div>
      </div>
    </div>
  );
}


export default productItem;
