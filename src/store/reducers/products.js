import * as actionTypes from '../actions/products';
import { updateObject } from '../utility';


const initialState = {
    products: null,
    allProducts:null,
    loading: false,
    error: null,
    success: false,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCTS: return updateProducts(state, action.products);
        case actionTypes.ADD_PRODUCT: return addProduct(state, action.product);
        case actionTypes.UPDATE_PRODUCT: return updateProduct(state, action.productCode, action.updatedProduct);
        case actionTypes.DELETE_PRODUCT: return deleteProduct(state, action.productCode);
        case actionTypes.FILTER_PRODUCT: return filterProduct(state,action.productCategory);
        case actionTypes.CACHED_PRODUCTS : return cachedProducts(state);
        case actionTypes.LOADING: return loading(state);
        case actionTypes.ERROR: return error(state, action.message);
        default: return state;
    }
}

const loading = state => {
    return {
        ...state,
        loading: true,
        success: false,
        error: null,
    }
}

const error = (state, message) => {
    return {
        ...state,
        loading: false,
        error: message
    }
}

const updateProducts = (state, newProducts) => ({
    ...state,
    products: newProducts
});

const addProduct = (state, product) => {
    return {
        ...state,
        products: [...state.products, product],
        success: true,
        loading: false,
        error: null,
    }
};

const updateProduct = (state, productId, updatedProduct) => {
    const newProducts = state.products.map((product) => {
        if (product.productCode === productId) {
            return {
                ...updatedProduct
            }
        } else {
            return {
                ...product
            }
        }
    });
    return {
        ...state,
        products: newProducts
    }
};
const filterProduct = (state, productCategory) => {
  console.log("insided filter",productCategory);
  if(state.allProducts===null){
  let updateproducts=state.products.filter(product => product.productCategory === productCategory );
    return updateObject(state, {
      allProducts:state.products,
      products: updateproducts
    });
  }else{
    let updateproducts=state.allProducts.filter(product => product.productCategory === productCategory );
      return updateObject(state, {
        products: updateproducts
      });
  }
};
const deleteProduct = (state, productId) => {
    console.log("[products reducer] state.products: ", state.products);
    return {
        ...state,
        products: state.products.filter((product) => product.productCode !== productId)
    }
};
const cachedProducts = (state) =>{
  return updateObject(state, {
    products: state.allProducts,
  });
}


export default productsReducer;
