import React from 'react';
import './ProductItems.css';
import ExporPDF from '../../../../components/ExportTOPdf/ExportToPdf'
import ExportExcel from '../../../../components/ExportTOExcel/ExportToExcel'
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../../../store/actions/products';

const productItems = (props) => {
  let products = [];

  if (!props.products) {
     console.log("Get products called");
     props.getProducts();
   }else {
     products = props.products;
   }
   const handleSpecified = () =>
     props.history.push({
     pathname: "products/id",

   });
  const basePath = props.match.url;
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
            <ExporPDF />
            <ExportExcel />
          </div>
        </div>
        <div className="row offset-2">
          {products.map((product) => {
            return (
              <div key={product.productCode} className="col-4">
                <ProductItem basePath={basePath} onDelete={() => props.delete(product.productCode)} product={product} Specified={() => {props.setProductSpecks(product);
                   handleSpecified()}} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
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
