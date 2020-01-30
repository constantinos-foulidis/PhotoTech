import React from 'react';
import Button from 'react-bootstrap/Button';
import './ProductItem.css';
import * as actions from '../../../../../store/actions/products';

const productItem = (props) => {

    let imagePath = "/PhotoSc.png";
    if(props.product.originalname){
      imagePath = props.product.originalname;
    }

    return (
        <div className="card cardWidth ml-5">
              <img alt="logo" className="card-img-top imgWidth" src={imagePath} />
              <div className="card-body text-center">
                <h5 className="card-title titleCardFontSize">{props.product.productDetail}</h5>
                <p className="card-text">Διαθεσημοτητα : {props.product.productQuantity}</p>
                <p className="card-text border-bottom">Κωδικός : {props.product.productCode}</p>
                <Button className="productItembtn mb-2" variant="info" onClick={props.onDelete}>Διαγραφή Προιόντος</Button>
                <Button className="productItembtn mb-2" variant="info" onClick={props.Specified}>Επεξεργασία αποθέματος</Button>
              </div>
        </div>
    );
}



export default productItem;
