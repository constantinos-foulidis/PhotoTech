import React from 'react';
import Button from 'react-bootstrap/Button';
import './ProductItem.css';
import { withRouter } from "react-router-dom";

const productItem = (props) => {
    const handleSpecified = () =>
      props.history.push({
      pathname: props.basePath+"/id",
    });

    return (
        <div className="card cardWidth ml-5">
              <img alt="logo" className="card-img-top imgWidth" src="/PhotoSc.png" />
              <div className="card-body text-center">
                <h5 className="card-title titleCardFontSize">{props.product.productDetail}</h5>
                <p className="card-text">Διαθεσημοτητα : {props.product.productQuantity}</p>
                <p className="card-text border-bottom">Κωδικός : {props.product.productCode}</p>
                <Button className="productItembtn mb-2" variant="info" onClick={props.onDelete}>Διαγραφή Προιόντος</Button>
                <Button className="productItembtn mb-2" variant="info" onClick={handleSpecified}>Επεξεργασία αποθέματος</Button>
              </div>
        </div>
    );
}

export default withRouter(productItem);
