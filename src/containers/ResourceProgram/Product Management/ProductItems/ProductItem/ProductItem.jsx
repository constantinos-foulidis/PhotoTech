import React from 'react';
import Button from 'react-bootstrap/Button';
import './ProductItem.css';


const productItem = (props) => {

    let imagePath = "/PhotoSc.png";
    if(props.product.originalname){
    //  imagePath = props.product.originalname;
      const port = ":4040";
    imagePath = [props.product.originalname.slice(0, 22), port, props.product.originalname.slice(22)].join('');

    }
    let adminExtras;
    if(JSON.parse(localStorage.getItem('isadmin'))===true){
      adminExtras=(
          <Button className="productItembtn mb-2" variant="info" onClick={props.onDelete}>Διαγραφή Προιόντος</Button>
      )

    }
    return (
        <div className="card cardWidth ml-5 mb-3">
              <img alt="logo" className="card-img-top imgWidth" src={imagePath} onClick={props.Specified} />
              <div className="card-body text-center">
                <h5 className="card-title titleCardFontSize" onClick={props.Specified}>{props.product.productDetail}</h5>
                <p className="card-text">Διαθεσημοτητα : {props.product.productQuantity}</p>
                <p className="card-text border-bottom">Κωδικός : {props.product.productCode}</p>
                {adminExtras}
                <Button className="productItembtn mb-2" variant="info" onClick={props.Specified}>Επεξεργασία αποθέματος</Button>
            </div>
        </div>
    );
}



export default productItem;
