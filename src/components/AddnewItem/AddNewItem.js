import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AddNewItem.css';
import ProductHeader from '../ProductHeader/ProductHeader';
import { addProduct } from '../../store/actions/products';
import { connect } from 'react-redux';

class NewItem extends Component {
  state = {
    selectedFile: null,
    product: {
      productCode: "",
      productDetail: "",
      productQuantity: "",
      productCategory: "",
      productSubcategory: "",
      productPosition: "",
      productOrder: "",
    }
  }

  return = () => {
    this.props.history.goBack();
  }

fileSelectedHandler = event =>{
  console.log(event.target.files[0]);
  this.setState({
    selectedFile: event.target.files[0]
  })
}
fileUploadHandler = () => {
 // use axios to upload file after button click
}

handleAddNew = (event) => {
  event.persist();
  console.log(event);
  event.preventDefault();
  const product = {...this.state.product};
  product.productDetail = event.target["0"].value;
  product.productCode = event.target["1"].value;
  product.productCategory = event.target["2"].value;
  product.productSubcategory = event.target["3"].value;
  product.productQuantity = event.target["4"].value;
  product.productPosition = event.target["5"].value;
  product.productOrder = event.target["6"].value;
  product.selectedFile = this.state.selectedFile;

  this.props.addProduct(product);
}

handleProductDetailChange = event => {
  event.preventDefault();
  console.log("[AddNewItem] event: ",event)
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productDetail: event.target.value,
      }
    };
  })
}

handleProductCodeChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productCode: event.target.value,
      }
    };
  })
}

handleProductQuantityChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productQuantity: event.target.value,
      }
    };
  });
}

handleProductCategoryChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productCategory: event.target.value,
      }
    };
  });
}

handleProductSubCategoryChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productSubcategory: event.target.value,
      }
    };
  });
}

handleProductOrderChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productOrder: event.target.value,
      }
    };
  });
}

handleProductPositionChange = event => {
  this.setState((oldState)=>{
    return {
      ...oldState,
      product: {
        ...oldState.product,
        productPosition: event.target.value,
      }
    };
  });
}

  render() {
    return (
      <React.Fragment>
         <ProductHeader/>
      <div className="Container">

        <div className="row justify-content-start">
          <div className="col">
            <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Χειροκίνητα</Button>
          </div>
          <div className="col">
            <Button className="widthbtn mb-2" variant="secondary" onClick={this.handleAddnew}>Ανέβασμα αρχείου</Button>
          </div>
        </div>
        <div className="row ">
          <div className="col ">
            <Form className="border p-4 form" onSubmit={this.handleAddNew}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Περιγραφή προιόντος</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Κωδικός Προιόντος</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formCategory">
                <Form.Label>Κατηγορία</Form.Label>
                <Form.Control as="select" >
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formSubcategory">
                <Form.Label>Υποκατηγορία</Form.Label>
                <Form.Control as="select" >
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.quantity">
                <Form.Label>Διαθεσιμότητα</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group as={Col} controlId="formPosition">
                <Form.Label>Θέση Προιόντος</Form.Label>
                <Form.Control as="select" >
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ταξεις</Form.Label>
                <Form.Control as="select" >
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10 }}>
                  <Form.Label className="mr-3">Φωτογραφία</Form.Label>
                  <input className="mr-5 p-1"  type="file" onChange={this.fileSelectedHandler}/>
                  <Button className="mr-2" type="button" variant="info" onClick={this.return} >Ακυρωση</Button>
                  <Button type="submit" variant="info">Καταχωρηση</Button>
                </Col>
              </Form.Group>
            </Form>
            <input type="file"  accept="image/*"/>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }


}

const mapStateToProps = (state, props) => {
  return {
    ...props
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product) => dispatch(addProduct(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
