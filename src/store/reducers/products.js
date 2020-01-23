import * as actionTypes from '../actions/products';


const initialState = {
    products: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCTS: return updateProducts(state, action.products);
        case actionTypes.ADD_PRODUCT: return addProduct(state, action.product);
        case actionTypes.UPDATE_PRODUCT: return updateProduct(state, action.productId, action.updatedProduct);
        case actionTypes.DELETE_PRODUCT: return deleteProduct(state, action.productId);
        default: return state;
    }
}

const updateProducts = (state, newProducts) => ({
    ...state,
    products: newProducts
});

const addProduct = (state, product) => {
    return {
        ...state,
        products: [...state.products, product]
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

const deleteProduct = (state, productId) => {
    return {
        ...state,
        products: state.products.filter((product) => product.productCode !== productId)
    }
};


export default productsReducer;
