import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ProductDetails.css";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductHeader from "../../../../components/ProductHeader/ProductHeader";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/products";
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
import categories from "../../../../Data/Category";
import positions from "../../../../Data/Positions";
import classes from "../../../../Data/Classes";
import Form from "react-bootstrap/Form";

class ProductSpecs extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleCloseImage = this.handleCloseImage.bind(this);
    console.log(props);
    if (props.productSpecks != null) {
      this.state = {
        productForDelete: "",
        errorMessage: "",
        remain: "",
        number: 10,
        show: false,
        showImage: false,
        whatIs: "",
        afterCalculations: 0,
        afterRemoveCalculations: 0,
        selectedCategory: categories[0],
        selectedSubcategory: categories[0].subcategories[0],
        selectedPosition: positions[0],
        selectedClass: classes[0],
        FirstselectedCategory: this.props.productSpecks.productCategory,
        FirstselectedSubcategory: this.props.productSpecks.productSubcategory,
        FirstselectedPosition: this.props.productSpecks.productPosition,
        FirstselectedClass: this.props.productSpecks.productOrder
      };
    }
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleCloseImage() {
    this.setState({ showImage: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleShowImage() {
    this.setState({ showImage: true });
  }
  subcategoryOnChangeHandler = event => {
    event.persist();
    console.log(event);
    this.setState({
      selectedSubcategory: event.target.value,
      FirstselectedSubcategory: event.target.value
    });
  };

  positionOnChangeHandler = event => {
    event.persist();
    this.setState({
      selectedPosition: event.target.value,
      FirstselectedPosition: event.target.value
    });
  };

  classOnChangeHandler = event => {
    event.persist();
    this.setState({
      selectedClass: event.target.value,
      FirstselectedClass: event.target.value
    });
  };

  addNumber = () => {
    console.log(this.state.number);
    let firstRemain = Number(this.state.remain);
    let aftercalculation = this.state.afterCalculations;

    const addedValue = Number(this.state.number);
    aftercalculation = aftercalculation + addedValue;
    firstRemain = firstRemain + addedValue;
    console.log(firstRemain);
    console.log(aftercalculation);
    this.setState({
      remain: firstRemain,
      wantToadd: "add",
      afterCalculations: aftercalculation
    });
  };

  removeNumber = () => {
    let firstRemain = Number(this.state.remain);
    if (!(Number(this.state.number) > firstRemain)) {
      const addedValue = Number(this.state.number);
      firstRemain = firstRemain - addedValue;
      let aftercalculation = this.state.afterRemoveCalculations;
      aftercalculation = aftercalculation + addedValue;
      this.setState({
        remain: firstRemain,
        wantToadd: "remove",
        afterRemoveCalculations: aftercalculation
      });
    } else {
      this.setState({
        errorMessage: "Δεν μπορεις να αφαιρεσεις τοσο μεγαλο αποθεμα"
      });
      alert("Δεν μπορεις να αφαιρεσεις τοσο μεγαλο αποθεμα");
    }
  };
  componentDidMount() {
    if (this.props.productSpecks !== null) {
      this.setState({ remain: this.props.productSpecks.productQuantity });
    }
  }
  categoryOnChangeHandler = event => {
    event.persist();
    this.setState(state => {
      return {
        selectedCategory: categories.find(
          category => category.name === event.target.value
        ),
        FirstselectedCategory: event.target.value
      };
    });
  };
  numberChanged = event => {
    this.setState({ number: event.target.value });
    console.log("inside number changed", event.target.value);
  };
  redirectToProducts = () => {
    this.props.history.goBack();
  };

  handleProduct = () => {
    let wantToadd = "nothing";
    let quantity = 0;
    quantity =
      this.state.afterCalculations - this.state.afterRemoveCalculations;
    console.log("eimai to quantity", quantity);
    if (quantity > 0) {
      //  this.setState({
      //  wantToadd:"add"
      // });
      wantToadd = "add";
    } else if (quantity === 0) {
      console.log("eimai to quantity=0", quantity);
      wantToadd = "lolen";
    } else {
      quantity = quantity * -1;
      console.log("revert to positive", quantity);
      //  this.setState({
      //  wantToadd:"remove"
      // });
      wantToadd = "remove";
    }
    let productDetail = document.getElementById("productDetail").innerHTML;
    let productCode = document.getElementById("productCode").innerHTML;

    const product = {};
    product._id = this.props.productSpecks._id;
    product.productDetail = productDetail;
    product.productCode = productCode;
    product.productCategory = this.state.FirstselectedCategory;
    product.productSubcategory = this.state.FirstselectedSubcategory;
    product.productQuantity = quantity;
    product.productPosition = this.state.FirstselectedPosition;
    product.productOrder = this.state.FirstselectedClass;
    product.wantToadd = wantToadd;
    console.log("id", product._id);
    this.props.updateProduct(product);
    this.props.history.goBack();
  };

  render() {
    let imagePath;
    if (this.props.productSpecks) {
      if (this.props.productSpecks.originalname) {
        const port = ":4040";
        imagePath = [
          this.props.productSpecks.originalname.slice(0, 22),
          port,
          this.props.productSpecks.originalname.slice(22)
        ].join("");
      }
    }
    let adminExtras;
    if (JSON.parse(localStorage.getItem("isadmin")) === true) {
      adminExtras = (
        <>
          <Button
            className="buttonWidth mb-2 mr-1 mb-3 mt-2 "
            variant="info"
            onClick={() => {
              this.handleProduct();
            }}
          >
            Αποθήκευση
          </Button>
          <Button
            className="buttonWidth mb-2 mr-1 mb-3 mt-2"
            variant="info"
            onClick={() => {
              this._modal.handleShow();
              this.setState({ productForDelete: this.products.productCode });
            }}
          >
            Διαγραφή Προιόντος
          </Button>
          <Button
            className="buttonWidth mb-2 mb-3 mt-2"
            variant="info"
            onClick={this.handleShow}
          >
            Επεξεργασία αποθέματος
          </Button>
        </>
      );
    }
    let showEverything;
    if (!this.props.productSpecks) {
      console.log("Get products called");
    } else {
      this.products = this.props.productSpecks;

      showEverything = (
        <React.Fragment>
          <div className="Container">
            <ProductHeader />
            <div className="row">
              <div className="col-5 border">
                <img
                  alt="Product"
                  className="imgflex onHoverEfect"
                  src={imagePath}
                  onClick={this.handleShowImage}
                />
              </div>
              <div className="col mb-2 border ml-4 ">
                <div className="row">
                  <div className="col border-bottom">
                    <h4>Περιγραφή Προιόντος</h4>
                    <p
                      id="productDetail"
                      contentEditable={true}
                      suppressContentEditableWarning={true}
                    >
                      {this.products.productDetail}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col border-bottom mb-2">
                    <div className="row">
                      <h5>Κωδικος :</h5>
                      <p
                        className="w-75"
                        id="productCode"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                      >
                        {this.products.productCode}
                      </p>
                    </div>
                    <div className="row">
                      <h5>Κaτηγορία :</h5>
                      <Form.Control
                        as="select"
                        value={this.state.FirstselectedCategory}
                        onChange={this.categoryOnChangeHandler}
                      >
                        {categories.map(category => (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                    <div className="row">
                      <h5>Υποκατηγορία :</h5>
                      <Form.Control
                        as="select"
                        value={this.state.FirstselectedSubcategory}
                        onChange={this.subcategoryOnChangeHandler}
                      >
                        {this.state.selectedCategory.subcategories.length === 0
                          ? null
                          : this.state.selectedCategory.subcategories.map(
                              subcategory => (
                                <option key={subcategory} value={subcategory}>
                                  {subcategory}
                                </option>
                              )
                            )}
                      </Form.Control>
                    </div>
                    <div className="row">
                      <h5>Διαθεσιμότητα :</h5>
                      <p>{this.state.remain}</p>
                    </div>
                    <div className="row">
                      <h5>θέση :</h5>
                      <Form.Control
                        as="select"
                        value={this.state.FirstselectedPosition}
                        onChange={this.positionOnChangeHandler}
                      >
                        {positions.map(position => (
                          <option value={position} key={position}>
                            {position}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                    <div className="row">
                      <h5>Τάξεις : </h5>
                      <Form.Control
                        as="select"
                        value={this.state.FirstselectedClass}
                        onChange={this.classOnChangeHandler}
                      >
                        {classes.map(productClass => (
                          <option value={productClass} key={productClass}>
                            {productClass}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">{adminExtras}</div>
                </div>
              </div>
            </div>
            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.show}
              onHide={this.handleClose}
            >
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
                      <input
                        type="number"
                        placeholder="Αριθμος"
                        onChange={event => this.numberChanged(event)}
                      />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                      <Button
                        className="mb-2 mr-1"
                        variant="info"
                        onClick={this.addNumber}
                      >
                        Πρόσθεση
                      </Button>
                    </Col>
                    <Col xs={6} md={4}>
                      <Button
                        className=" mb-2 mr-1"
                        variant="info"
                        onClick={this.removeNumber}
                      >
                        Αφαίρεση
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              size="lg"
              show={this.state.showImage}
              onHide={this.handleCloseImage}
            >
              <Modal.Header closeButton="closeButton"></Modal.Header>
              <Modal.Body>
                <Container>
                  <Row className="show-grid mb-4">
                    <img alt="Product" className="modalImage" src={imagePath} />
                  </Row>
                </Container>
              </Modal.Body>
            </Modal>
          </div>
          <DeleteModal
            ref={modal => {
              this._modal = modal;
            }}
            onOkey={() => {
              this.props.delete(this.state.productForDelete);
              this.redirectToProducts();
            }}
          />
        </React.Fragment>
      );
    }
    return <>{showEverything}</>;
  }
}
const mapStateToProps = (state, props) => {
  return {
    ...props,
    productSpecks: state.products.productSpecks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: productCode => dispatch(actions.deleteProduct(productCode)),
    updateProduct: form => dispatch(actions.ProductUpdated(form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSpecs);
