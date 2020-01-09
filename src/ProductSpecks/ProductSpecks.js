import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../ProductSpecks/ProductSpecks.css';

class ProductSpecs extends Component {
  constructor(){
    super();

  }
  render () {
    return (
      <div className="Container">
         <div className="row ">
          <div className="col border">
           <img   src="/PhotoSc.png"/>
          </div>
          <div className="col mb-2 border ml-4 ">
               <div className="row">
                 <div className="col border-bottom">
                   <h4>Περιγραή Προιόντος</h4>
                   <p >Φωτιστικό Τοιχου</p>
                 </div>
               </div>
               <div className="row">
                 <div className="col border-bottom mb-2">
                   <h5>Κωδικος :</h5>
                   <h5>Κaτηγορία :</h5>
                   <h5>Υποκατηγορία :</h5>
                   <h5>Διαθεσιμότητα :</h5>
                   <h5>θέση :</h5>
                   <h5>Τάξεις :</h5>
                 </div>
               </div>
               <div className="row">
                 <div className="col">
                   <Button className="buttonWidth mb-2 mr-1" variant="info">Διαγραφή Προιόντος</Button>
                   <Button className="buttonWidth mb-2" variant="info">Επεξεργασία αποθέματος</Button>
                 </div>
               </div>
          </div>
          </div>
      </div>

    );
  }
}

export default ProductSpecs;
