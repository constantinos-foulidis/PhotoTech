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
          <div className="col-5 border">
           <img  className="imgflex" src="/PhotoSc.png"/>
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
                   <div className="row">
                      <h5>Κωδικος :</h5>
                      <p contentEditable={true} >12345</p>
                   </div>
                   <div className="row">
                   <h5>Κaτηγορία :</h5>
                     <p contentEditable={true} >Τεστ</p>
                   </div>
                   <div className="row">
                   <h5>Υποκατηγορία :</h5>
                     <p contentEditable={true} >Κυρια</p>
                   </div>
                   <div className="row">
                 <h5>Διαθεσιμότητα :</h5>
                   <p>1000</p>
                 </div>
                 <div className="row">
                   <h5>θέση :</h5>
                     <p>A10</p>
                   </div>
                   <div className="row">
                   <h5>Τάξεις :</h5>
                     <p>A</p>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col">
                   <Button className="buttonWidth mb-2 mr-1" variant="info">Αποθήκευση</Button>
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
