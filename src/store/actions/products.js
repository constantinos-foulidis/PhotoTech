import Axios from "axios";
import FormData from 'form-data';

const baseUrl = 'http://localhost:4040/api/';
const productsUri = 'product/';

export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProducts = () => {
    return (dispatch, getState) => {
        Axios.get(baseUrl + productsUri).then((response)=>{
            console.log("Products: ", response.data);
            dispatch(updateProducts(response.data.data));
        })
    }
}

const updateProducts = (products) => {
    return {
        type: UPDATE_PRODUCTS,
        products: products
    };
}

export const addProduct = (product) => {
    return (dispatch, getState) => {
        const data = new FormData();
        console.log("[ProductActions] addProduct - product: ", product);
        data.append("myimage", product.selectedFile, product.selectedFile.name);
        data.append("productDetail", product.productDetail);
        data.append("productCode", product.productCode);
        data.append("productCategory", product.productCategory);
        data.append("productSubcategory", product.productSubcategory);
        data.append("productQuantity", product.productQuantity);
        data.append("productPosition", product.productPosition);
        data.append("productOrder", product.productOrder);
        Axios.post(baseUrl + productsUri, data).then(response => {
            dispatch(addProductCreator(response.data.data));
        })
    }
};

const addProductCreator = (product) => {
    return {
        type: ADD_PRODUCT,
        product: product
    };
}
