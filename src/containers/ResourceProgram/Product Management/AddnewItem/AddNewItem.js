import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AddNewItem.css';
import categories from '../../../../Data/Category';
import positions from '../../../../Data/Positions';
import classes from '../../../../Data/Classes';
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';
import { addProduct } from '../../../../store/actions/products';
import { connect } from 'react-redux';
import FormControl from 'react-bootstrap/FormControl';

class NewItem extends Component {
  state = {
    selectedFile: null,
    selectedCategory: categories[0],
    selectedSubcategory: categories[0].subcategories[0],
    selectedPosition: positions[0],
    selectedClass: classes[0],
    quantity: 0,
    inValidity: {
      productDetail: false,
      productCode: false,
      productCategory: false,
      productSubcategory: false,
      productOrder: false,
      productQuantity: false,
      productImage: false,
      productPosition: false,
      selectedFile: false,
    }
  }

  return = () => {
    this.props.history.goBack();
  }

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  validate = product => {
    const inValidity = { ...this.state.inValidity };
    if (product.productDetail == null || product.productDetail === '') {
      inValidity.productDetail = true;
    } else {
      inValidity.productDetail = false;
    }

    if (product.productCode == null || product.productCode === '') {
      inValidity.productCode = true;
    } else {
      inValidity.productCode = false;
    }

    if (product.productCategory == null || product.productCategory === '') {
      inValidity.productCategory = true;
    } else {
      inValidity.productCategory = false;
    }

    if (product.productSubcategory == null || product.productSubcategory === '') {
      inValidity.productSubcategory = true;
    } else {
      inValidity.productSubcategory = false;
    }

    if (product.productQuantity == null || product.productQuantity < 0) {
      inValidity.productQuantity = true;
    } else {
      inValidity.productQuantity = false;
    }

    if (product.productPosition == null || product.productPosition === '') {
      inValidity.productPosition = true;
    } else {
      inValidity.productPosition = false;
    }

    if (product.productOrder == null || product.productOrder === '') {
      inValidity.productOrder = true;
    } else {
      inValidity.productOrder = false;
    }

    if (product.selectedFile == null) {
      inValidity.selectedFile = true;
    } else {
      inValidity.selectedFile = false;
    }

    const valid = Object.getOwnPropertyNames(inValidity).every(property => !inValidity[property])
    console.log("[valid] ", valid);
    if(!valid){
      this.setState({inValidity: inValidity});
    }
    return valid;
  }

  handleAddNew = (event) => {
    event.persist();
    console.log(event);
    event.preventDefault();
    const product = {};
    product.productDetail = event.target["0"].value.trim();
    product.productCode = event.target["1"].value.trim();
    product.productCategory = event.target["2"].value.trim();
    product.productSubcategory = event.target["3"].value.trim();
    product.productQuantity = event.target["4"].value;
    product.productPosition = event.target["5"].value.trim();
    product.productOrder = event.target["6"].value.trim();
    product.selectedFile = this.state.selectedFile;

    if(!this.validate(product)) return;

    this.props.addProduct(product);
  }

  categoryOnChangeHandler = event => {
    event.persist();
    this.setState((state) => { return { selectedCategory: categories.find(category => category.name === event.target.value) } })
  }

  subcategoryOnChangeHandler = event => {
    event.persist();
    this.setState({ selectedSubcategory: event.target.value });
  }

  positionOnChangeHandler = event => {
    event.persist();
    this.setState({ selectedPosition: event.target.value });
  }

  classOnChangeHandler = event => {
    event.persist();
    this.setState({ selectedClass: event.target.value });
  }

  quantityOnChangeHandler = event => {
    event.persist();
    if (event.target.value >= 0) {
      this.setState({ quantity: event.target.value });
    }
  }

  render() {
    console.log("[AddNewItem.render()] state: ", this.state);
    return (
      <React.Fragment>
        <ProductHeader />
        <div className="Container offset-2">

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
                <Form.Group controlId="productDetail">
                  <Form.Label>Περιγραφή προιόντος</Form.Label>
                  <Form.Control as="textarea" isInvalid={this.state.inValidity.productDetail} rows="3" />
                </Form.Group>
                <Form.Group controlId="productCode">
                  <Form.Label>Κωδικός Προιόντος</Form.Label>
                  <Form.Control as="input" isInvalid={this.state.inValidity.productCode} />
                </Form.Group>
                <Form.Group controlId="productCategory">
                  <Form.Label>Κατηγορία</Form.Label>
                  <Form.Control as="select" value={this.state.selectedCategory.name} onChange={this.categoryOnChangeHandler} isInvalid={this.state.inValidity.productCategory}>
                    {categories.map(category => (<option key={category.name} value={category.name}>{category.name}</option>))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="productSubcategory">
                  <Form.Label>Υποκατηγορία</Form.Label>
                  <Form.Control as="select" value={this.state.selectedSubcategory} onChange={this.subcategoryOnChangeHandler} isInvalid={this.state.inValidity.productSubcategory} >
                    {
                      this.state.selectedCategory.subcategories.length === 0 ?
                        null :
                        this.state.selectedCategory.subcategories.map(subcategory => <option key={subcategory} value={subcategory}>{subcategory}</option>)
                    }
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="productQuantity">
                  <Form.Label>Διαθεσιμότητα</Form.Label>
                  <Form.Control as="input" type="number" value={this.state.quantity} onChange={this.quantityOnChangeHandler} isInvalid={this.state.inValidity.productQuantity} />
                </Form.Group>
                <Form.Group controlId="formPosition">
                  <Form.Label>Θέση Προιόντος</Form.Label>
                  <Form.Control as="select" value={this.state.selectedPosition} onChange={this.positionOnChangeHandler} isInvalid={this.state.inValidity.productQuantity} >
                    {positions.map(position => <option value={position} key={position}>{position}</option>)}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="productOrder">
                  <Form.Label>Ταξεις</Form.Label>
                  <Form.Control as="select" value={this.state.selectedClass} onChange={this.classOnChangeHandler} isInvalid={this.state.inValidity.productOrder}>
                    {classes.map(productClass => <option value={productClass} key={productClass}>{productClass}</option>)}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Row} className="align-items-end">
                  <Col sm={2} md={2}>
                    <Form.Label>Φωτογραφία</Form.Label>
                  </Col>
                  <Col  sm={6} md={6} >
                    <Form.Control className="p-1" as="input" type="file" isInvalid={this.state.inValidity.selectedFile} onChange={this.fileSelectedHandler} />
                  </Col>
                  <Col sm={4} md={4} style={{textAlign: 'right'}}>
                    <Button className="mr-2" type="button" variant="info" onClick={this.return} >Ακυρωση</Button>
                    <Button type="submit" variant="info">Καταχωρηση</Button>
                  </Col>
                </Form.Group>
              </Form>
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
