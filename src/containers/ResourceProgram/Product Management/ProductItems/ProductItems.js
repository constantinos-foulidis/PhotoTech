import React,{Component} from 'react';
import './ProductItems.css';
import ExporPDF from '../../../../components/ExportTOPdf/ExportToPdf'
import ExportExcel from '../../../../components/ExportTOExcel/ExportToExcel'
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../../../store/actions/products';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';

class productItems  extends Component {
    constructor(props){
      super(props);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        productForDelete:'',
        show: false,
      };

    }
    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }
render() {
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
      <div className="Container">
        <div className="row justify-content-center">
          <div className="col">
            <ProductHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <ExportExcel />
          </div>
        </div>
        <div className="row offset-2">
          {products.map((product) => {
            return (
              <div key={product.productCode} className="col">
                <ProductItem basePath={basePath} onDelete={() => {this._modal.handleShow()
                    this.setState({productForDelete:product.productCode})}} product={product} Specified={() => {this.props.setProductSpecks(product);
                   handleSpecified()}} />
              </div>
            );
          })}
        </div>
      </div>
      <DeleteModal ref={(modal) => { this._modal = modal;}} onOkey={() => {this.props.delete(this.state.productForDelete)}} />
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
    setProductSpecks: (productSpecks) => dispatch(actions.setProductsSpecks(productSpecks))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(productItems));
