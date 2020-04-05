import React,{Component} from 'react';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ProductHeaderGrafeiou from '../Products/HeaderProductsGrafeiou/GrafeioHeaderProducts';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as actions from '../../../store/actions/products';
import {filterCustomerByname} from  '../../../store/actions/Grafeio/sallers';

import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import { Popover } from 'react-bootstrap';


class productsGrafeiou  extends Component {
    constructor(props){
      super(props);


      this.state = {
        productForDelete:'',
        number:1,
        search:"test",
        focused:false


      };

    }


    handleSearch = (event) =>{
       //this.setState({number:event.target.value});
    }
    quantityHandler = (event) =>{
       this.setState({number:event.target.value});
    }
    add2Cart = (product) => {

      this.props.addtoCart(product);
     console.log(product);
    }
render() {
  const ReactDOM = require('react-dom')
  let imagePath = "/PhotoSc.png";
  let popover;

   popover = (
  <Popover id="popover-basic arrow">
    <Popover.Content className="popoverWidth_Height detailSailler">
     <p>test</p>
    </Popover.Content>
  </Popover>
  );


  let products = [];

  if (this.props.products === null) {
     console.log("Get products called");
     this.props.getProducts();
   }else {
     products = this.props.products;

   }
   const handleSpecified = () =>
     this.props.history.push({
     pathname: "/recource/products/id",

   });
  const basePath = this.props.match.url;
  return (
    <React.Fragment>
          <NavigationGrafeio/>
      <div className="Container ">
        <div className="row">
          <div className="col-auto">
            <ProductHeaderGrafeiou />
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
             <OverlayTrigger  trigger='click' placement="right" overlay={popover}>
            <input
              style={{width : "200px",left:"200px",position:"relative",height:"30px",borderRadius:"10px",marginBottom:"20px"}}
              type="text"
              placeholder="αναζητηση"
              onChange={this.handleSearch}
            />
             </OverlayTrigger>

          </div>
        </div>
        <div className="row offset-2">
          {products.map((product) => {
            //  imagePath = props.product.originalname;
            const port = ":4040";
            imagePath = [
              product.originalname.slice(0, 22),
              port,
              product.originalname.slice(22)
            ].join("");
            return (
              <div key={product.productCode} className="col-auto">
              <div className="card cardWidth ml-5">
                <img
                  alt="logo"
                  className="card-img-top imgWidth onHoverEfect"
                  src={imagePath}
                />
                <div className="card-body text-center onHoverEfect">
                  <h5 className="card-title titleCardFontSize" onClick={this.props.Specified}>
                    {product.productDetail}
                  </h5>
                  <p className="smallText ">
                    Διαθεσιμότητα : {product.productQuantity}
                  </p>
                  <p className="smallText">
                    Κωδικός : {product.productCode}
                  </p>
                  <p className="smallText ">
                    Ποσότητα : <input type="number" style={{height: "17%",width: "27%"}} value={this.state.number} onChange={this.quantityHandler} ></input>
                  </p>
                  <p className="smallText border-bottom ">
                    Τάξεις : {product.productOrder}
                  </p>
                  <Button
                    className="productItembtn mb-2"
                    variant="info"
                    onClick={() => this.add2Cart(product)}
                  >
                    Προσθήκη στο πακέτο
                  </Button>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    products: state.products.products
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (productCode) => dispatch(actions.deleteProduct(productCode)),
    getProducts: () => dispatch(actions.getProducts()),
    setProductSpecks: (productSpecks) => dispatch(actions.setProductsSpecks(productSpecks)),
    filterCustomerByname: (CustName) => dispatch(filterCustomerByname(CustName)),
    addtoCart: (product) => dispatch(actions.addtoCart(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(productsGrafeiou));
