import React,{Component} from 'react';

import ProductHeaderGrafeiou from '../Products/HeaderProductsGrafeiou/GrafeioHeaderProducts';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as actions from '../../../store/actions/products';
import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";

class productsGrafeiou  extends Component {
    constructor(props){
      super(props);


      this.state = {
        productForDelete:'',
        number:1


      };

    }
    quantityHandler = (event) =>{
       this.setState({number:event.target.value});
    }
    add2Cart = (product) => {

      this.props.addtoCart(product);
     console.log(product);
    }
render() {
  let imagePath = "/PhotoSc.png";

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
      <div className="Container">
        <div className="row justify-content-center">
          <div className="col">
            <ProductHeaderGrafeiou />
          </div>
        </div>
        <div className="row">
          <div className="col-9">

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
    addtoCart: (product) => dispatch(actions.addtoCart(product))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(productsGrafeiou));
