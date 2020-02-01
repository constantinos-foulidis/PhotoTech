import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './ProductDetails.css';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/products';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';

class ProductSpecs extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      productForDelete:'',
      errorMessage: '',
      remain:"",
      number: 10,
      show: false,
      whatIs:"",
    };

  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addNumber = () => {
    console.log(this.state.number);
    const firstRemain = Number(this.props.productSpecks.productQuantity);
    const addedValue = Number(this.state.number);
    const sum =  firstRemain + addedValue;
    console.log(sum);
    this.setState({ remain: sum,
    wantToadd:"add" });
  }

  removeNumber = () => {
    const firstRemain = Number(this.props.productSpecks.productQuantity);
    if (!(Number(this.state.number) > firstRemain)) {
      const addedValue = Number(this.state.number);
      const sum = firstRemain - addedValue;
      this.setState({ remain: sum,
      wantToadd:"remove" });
    } else {
      this.setState({ errorMessage: 'Δεν μπορεις να αφαιρεσεις τοσο μεγαλο αποθεμα' });
      alert('Δεν μπορεις να αφαιρεσεις τοσο μεγαλο αποθεμα');
    }

  }
componentDidMount(){
 if(this.props.productSpecks !== null){
  this.setState({ remain:this.props.productSpecks.productQuantity });
}
}
  numberChanged = (event) => {

    this.setState({ number: event.target.value });
    console.log("inside number changed");
  }
  redirectToProducts= () => {
    this.props.history.goBack();
  }

handleProduct = () =>{
  let productDetail = document.getElementById("productDetail").innerHTML;
  let productCategory = document.getElementById("productCategory").innerHTML;
  let productCode = document.getElementById("productCode").innerHTML;
  let productSubcategory = document.getElementById("productSubcategory").innerHTML;
  let productPosition = document.getElementById("productPosition").innerHTML;
  let productOrder = document.getElementById("productOrders").innerHTML;
  console.log("product",productCategory);
  const product = {};
  product.productDetail = productDetail;
  product.productCode = productCode;
  product.productCategory = productCategory;
  product.productSubcategory = productSubcategory;
  product.productQuantity = this.state.number;
  product.productPosition = productPosition;
  product.productOrder = productOrder;
  product.wantToadd=this.state.wantToadd;

  this.props.updateProduct(product);
}

  render() {
    let adminExtras;
    if(JSON.parse(localStorage.getItem('isadmin'))==='true'){
      adminExtras=(
        <>
        <Button className="buttonWidth mb-2 mr-1 mb-3 mt-2 " variant="info" onClick={() => {this.handleProduct()}}>Αποθήκευση</Button>
        <Button className="buttonWidth mb-2 mr-1 mb-3 mt-2" variant="info"  onClick={() => {this._modal.handleShow()
            this.setState({productForDelete:this.products.productCode})}}>Διαγραφή Προιόντος</Button>
        <Button className="buttonWidth mb-2 mb-3 mt-2" variant="info" onClick={this.handleShow}>Επεξεργασία αποθέματος</Button>
         </>
    )

    }
    let showEverything;
    if (!this.props.productSpecks) {
       console.log("Get products called");

     }else {
       this.products = this.props.productSpecks;


        showEverything = (
         <React.Fragment>
         <div className="Container">
         <ProductHeader/>
         <div className="row">
           <div className="col-5 border">
             <img alt="Product" className="imgflex" src={this.products.originalname} />
           </div>
           <div className="col mb-2 border ml-4 ">
             <div className="row">
               <div className="col border-bottom">
                 <h4>Περιγραφή Προιόντος</h4>
                 <p id="productDetail" contentEditable={true} suppressContentEditableWarning={true} >{this.products.productDetail}</p>
               </div>
             </div>
             <div className="row">
               <div className="col border-bottom mb-2">
                 <div className="row">
                   <h5>Κωδικος :</h5>
                   <p id="productCode" contentEditable={true} suppressContentEditableWarning={true}>{this.products.productCode}</p>
                 </div>
                 <div className="row">
                   <h5>Κaτηγορία :</h5>
                   <p id="productCategory" contentEditable={true} suppressContentEditableWarning={true}>{this.products.productCategory}</p>
                 </div>
                 <div className="row">
                   <h5>Υποκατηγορία :</h5>
                   <p id="productSubcategory"contentEditable={true} suppressContentEditableWarning={true}>{this.products.productSubcategory}</p>
                 </div>
                 <div className="row">
                   <h5 >Διαθεσιμότητα :</h5>
                   <p>{this.state.remain}</p>
                 </div>
                 <div className="row">
                   <h5>θέση :</h5>
                   <p id="productPosition" contentEditable={true} suppressContentEditableWarning={true}>{this.products.productPosition}</p>
                 </div>
                 <div className="row">
                   <h5>Τάξεις :</h5>
                   <p id="productOrders" contentEditable={true} suppressContentEditableWarning={true}>{this.products.productOrder}</p>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col">
                    {adminExtras}
               </div>
             </div>
           </div>
         </div>
         <Modal aria-labelledby="contained-modal-title-vcenter" show={this.state.show} onHide={this.handleClose}>
           <Modal.Header closeButton="closeButton">
             <Modal.Title id="contained-modal-title-vcenter">
               Επεξεργασια Αποθέματος
               <h5>Συνολικό Απόθεμα {this.state.remain}</h5>
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Container>
               <Row className="show-grid mb-4">
                 <Col xs={12} md={8}>
                   <input type="number" placeholder="Αριθμος για αφαιρεση η προσθεση αποθεματος" onChange={(event) => this.numberChanged(event)} />
                 </Col>
               </Row>
               <Row className="show-grid">
                 <Col xs={6} md={4}>
                   <Button className="mb-2 mr-1" variant="info" onClick={this.addNumber}>Πρόσθεση</Button>
                 </Col>
                 <Col xs={6} md={4}>
                   <Button className=" mb-2 mr-1" variant="info" onClick={this.removeNumber}>Αφαίρεση</Button>
                 </Col>
               </Row>
             </Container>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={this.handleClose}>Close</Button>
           </Modal.Footer>
         </Modal>
       </div>
         <DeleteModal ref={(modal) => { this._modal = modal;}} onOkey={() => {this.props.delete(this.state.productForDelete);
           this.redirectToProducts()}} />
     </React.Fragment>
       )
     }
    return (

      <>
        {showEverything}
      </>
      );
  }
}
const mapStateToProps = (state, props) => {
  return {
    ...props,
    productSpecks: state.products.productSpecks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (productCode) => dispatch(actions.deleteProduct(productCode)),
   updateProduct: (form) => dispatch(actions.ProductUpdated(form))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSpecs);
