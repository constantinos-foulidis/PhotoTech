import React from 'react';
import './ProductItems.css';
import ExporPDF from '../../../../components/ExportTOPdf/ExportToPdf'
import ExportExcel from '../../../../components/ExportTOExcel/ExportToExcel'
import ProductHeader from '../../../../components/ProductHeader/ProductHeader';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/products';

const productItems = (props) => {
  let products = [];

  if (!props.products) {
    console.log("Get products called");
    props.getProducts();
  }else {
    products = props.products;
  }

  console.log("[ProductItems] props: ", props);

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
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.productCode} className="col">
                <ProductItem basePath={basePath} onDelete={() => props.delete(product.productCode)} product={product} />
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
    delete: (id) => dispatch({ type: "DELETE" }),
    getProducts: () => dispatch(actions.getProducts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(productItems);
