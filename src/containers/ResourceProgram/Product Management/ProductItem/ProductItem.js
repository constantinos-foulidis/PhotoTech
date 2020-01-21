import React from 'react';
import './ProductItem.css';
import Button from 'react-bootstrap/Button';
import ExporPDF from '../../../../components/ExportTOPdf/ExportToPdf'
import ExportExcel from '../../../../components/ExportTOExcel/ExportToExcel'
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';

const productItem = (props) => {
  const handleSpecified = () =>
    props.history.push({
      pathname: props.match.url +"/id",
    });

  return (
    <React.Fragment>
    <div className="Container">
       <div className="row justify-content-center">
       <div className="col">
      <ProductHeader/>
      </div>
      </div>
      <div className="row">
        <div className="col-9">
      <ExporPDF />
      <ExportExcel />
        </div>
      </div>
      <div className="row">
       <div className="col">
      <div className="card cardWidth ml-5">
        <img alt="logo" className="card-img-top imgWidth" src="/PhotoSc.png" />
        <div className="card-body text-center">
          <h5 className="card-title">Φωτηστικο Τεστ</h5>
          <p className="card-text">Διαθεσημοτητα : 150</p>
          <p className="card-text border-bottom">Κωδικός : 123456</p>
          <Button className="buttonWidth mb-2" variant="info">Διαγραφή Προιόντος</Button>
          <Button className="buttonWidth mb-2" variant="info" onClick={ handleSpecified }>Επεξεργασία αποθέματος</Button>
        </div>
      </div>
      </div>
      </div>
    </div>
    </React.Fragment>
  );
}


export default productItem;
