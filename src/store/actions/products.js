import Axios from "axios";

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

const addProduct = (product) => {
    return (dispatch, getState) => {
        Axios.post(baseUrl + productsUri, )
    }
};

const addProductCreator = (product) => {
    return {
        type: ADD_PRODUCT,
        product: product
    };
}
