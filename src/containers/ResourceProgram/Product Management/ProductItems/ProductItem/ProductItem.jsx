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
                <h5 className="card-title">Φωτηστικο Τεστ</h5>
                <p className="card-text">Διαθεσημοτητα : 150</p>
                <p className="card-text border-bottom">Κωδικός : 123456</p>
                <Button className="buttonWidth mb-2" variant="info" onClick={props.onDelete}>Διαγραφή Προιόντος</Button>
                <Button className="buttonWidth mb-2" variant="info" onClick={handleSpecified}>Επεξεργασία αποθέματος</Button>
              </div>
        </div>
    );
}

export default productItem;
