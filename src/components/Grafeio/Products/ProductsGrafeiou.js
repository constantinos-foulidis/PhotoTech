import React,{Component} from 'react';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ProductHeaderGrafeiou from '../Products/HeaderProductsGrafeiou/GrafeioHeaderProducts';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as actions from '../../../store/actions/products';
import {filterCustomerByname,getCustomers} from  '../../../store/actions/Grafeio/sallers';

import NavigationGrafeio from "../NavigationGrafeio/NavigationGrafeio";
import { Popover } from 'react-bootstrap';


class productsGrafeiou  extends Component {
    constructor(props){
      super(props);


      this.state = {
        productForDelete:'',
        number:0,
        search:"test",
        focused:false


      };

    }


    handleSearch = (event) =>{
       //this.setState({number:event.target.value});
       this.props.filterCustomerByname(event.target.value);
    }
    quantityHandler = (event,index) =>{
      console.log(event.target.value);
      console.log(index);
      var number = [];
           number[index] = [...event.target.value];
       this.setState(number);
       console.log(this.state);
    }
    add2Cart = (product,quantity) => {
   console.log(quantity);
      this.props.addtoCart(product,quantity[0]);
     console.log(product);
    }
    componentDidMount(){
      this.props.getCustomers();
    }
render() {

  let imagePath = "/PhotoSc.png";
  let popover;
  let test;
if(  this.props.customers!= null){
      test = (
        this.props.customers.map((customers,index) => (
          <div key={index}>
        <p>{customers.schoolName}</p>
        <p>{customers.dieuthinsh}</p>
        <p>{customers.nomos}</p>
        </div>
      ))
      )
}
   popover = (
  <Popover id="popover-basic arrow">
    <Popover.Content className="popoverWidth_Height detailSailler">
     {test}
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
             <OverlayTrigger  trigger="click" placement="right" overlay={popover}>
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
          {products.map((product,index) => {
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
                    Ποσότητα : <input type="number" style={{height: "17%",width: "27%"}} name="number"  value={this.state.number[index]} onChange={(event) => this.quantityHandler(event,index)} ></input>
                  </p>
                  <p className="smallText border-bottom ">
                    Τάξεις : {product.productOrder}
                  </p>
                  <Button
                    className="productItembtn mb-2"
                    variant="info"
                    onClick={() => this.add2Cart(product,this.state[index])}
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
    products: state.products.products,
    customers:state.sellers.filterCustomers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    delete: (productCode) => dispatch(actions.deleteProduct(productCode)),
    getProducts: () => dispatch(actions.getProducts()),
    getCustomers:() => dispatch(getCustomers()),
    setProductSpecks: (productSpecks) => dispatch(actions.setProductsSpecks(productSpecks)),
    filterCustomerByname: (CustName) => dispatch(filterCustomerByname(CustName)),
    addtoCart: (product,number) => dispatch(actions.addtoCart(product,number))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(productsGrafeiou));
