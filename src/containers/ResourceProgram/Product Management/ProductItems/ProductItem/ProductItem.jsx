import React from 'react';
import Button from 'react-bootstrap/Button';

const productItem = (props) => {
    const handleSpecified = () =>
    props.history.push({
      pathname: props.basePath,
    });

    return (
        <div className="card cardWidth ml-5">
              <img alt="logo" className="card-img-top imgWidth" src="/PhotoSc.png" />
              <div className="card-body text-center">
                <h6 className="card-title">{props.product.productDetail}</h6>
                <p className="card-text">Διαθεσημοτητα : {props.product.productQuantity}</p>
                <p className="card-text border-bottom">Κωδικός : {props.product.productCode}</p>
                <Button className="buttonWidth mb-2" variant="info" onClick={props.onDelete}>Διαγραφή Προιόντος</Button>
                <Button className="buttonWidth mb-2" variant="info" onClick={handleSpecified}>Επεξεργασία αποθέματος</Button>
              </div>
        </div>
    );
}

export default productItem;
