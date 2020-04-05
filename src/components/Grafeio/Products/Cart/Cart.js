import React,{Component} from 'react';

import ProductHeaderGrafeiou from '../HeaderProductsGrafeiou/GrafeioHeaderProducts';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as actions from '../../../../store/actions/products';
import NavigationGrafeio from "../../NavigationGrafeio/NavigationGrafeio";
import {navigationToggleButton as NavigationToggleButton} from '../../NavigationGrafeio/NavigationGrafeio';

class Cart  extends Component {
    constructor(props){
      super(props);


      this.state = {
        productForDelete:'',
        number:this.props.quantitytoCart


      };

    }
    quantityHandler = (event) =>{
       this.setState({number:event.target.value});
    }
    add2Cart = (product) => {
     console.log(product);
    }
render() {
  let imagePath = "/PhotoSc.png";

  let products = [];
 let cart;
  if (this.props.cart === null) {
     console.log("Get products called");
     this.props.getProducts();
   }else {
     products = this.props.products;
     cart = (
         this.props.cart.map((product,index) => {
         //  imagePath = props.product.originalname;
         const port = ":4040";
         imagePath = [
           product.originalname.slice(0, 22),
           port,
           product.originalname.slice(22)
         ].join("");
         return (
           <div key={index} >
            <h5>{product.productCategory}</h5>
               <div className="row">
                  <div className="col">
                    <img
                      alt="logo"
                      style={{width : "80%"}}
                      src={imagePath}
                    />
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                      <h5 onClick={this.props.Specified}>
                        {product.productDetail}
                      </h5>
                      <p className="smallText ">
                        Διαθεσιμότητα : {product.productQuantity}
                      </p>
                      <p className="smallText">
                        Κωδικός : {product.productCode}
                      </p>
                      <p className="smallText border-bottom ">
                        Υποκατηγορία : {product.productSubcategory}
                      </p>
                      </div>
                      <div className="col">
                        <img alt="logo" className="w-20 onHoverEfect" src="/delete.png"style={{width : "20%"}} onClick={() => {this.props.deleteCart(product._id)}}/>
                      </div>
                      </div>
                      <div className="row">
                       <div className="col">
                         <p className="smallText ">
                           Τάξεις : {product.productOrder}
                         </p>
                       </div>
                       <div className="col">
                         <p className="smallText ">
                           Ποσότητα : <input type="number" style={{height: "17%",width: "27%"}} value={product.quantityTocart} onChange={this.quantityHandler} ></input>
                         </p>
                       </div>
                       </div>
                  </div>
               </div>
           </div>
         );
       }));
   }
   const handleSpecified = () =>
     this.props.history.push({
     pathname: "/recource/products/id",

   });
  const basePath = this.props.match.url;
  return (
    <React.Fragment>
    <NavigationGrafeio/>
   <NavigationToggleButton/>
     <div className="offset-4">
     <h1>Παραγγελία Πελάτη</h1>
     </div>
      <div className="Container">
        <div className="row offset-4">
         {cart}
        </div>
      </div>
    </React.Fragment>
  );
}
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    products: state.products.products,
    cart:state.products.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (productCode) => dispatch(actions.deleteProduct(productCode)),
    getProducts: () => dispatch(actions.getProducts()),
    setProductSpecks: (productSpecks) => dispatch(actions.setProductsSpecks(productSpecks)),
    addtoCart: (product) => dispatch(actions.addtoCart(product)),
    deleteCart: (product) => dispatch(actions.removFromCart(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));
