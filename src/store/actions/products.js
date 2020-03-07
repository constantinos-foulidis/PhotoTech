import Axios from "axios";
import FormData from 'form-data';

const baseUrl = 'http://167.172.109.106/';
const productsUri = 'api/product';
const deleteUri = '/delete';
const updateUri='/update';
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FILTER_PRODUCT = "FILTER_PRODUCT";
export const FILTER_PRODUCT_SUBCATEGORY = "FILTER_PRODUCT_SUBCATEGORY";
export const CACHED_PRODUCTS = "CACHED_PRODUCTS";
export const PRODUCTSID = "PRODUCTSID";
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FILTER_PRODUCT_BY_SEARCH_BAR = 'FILTER_PRODUCT_BY_SEARCH_BAR';


export const getProducts = () => {
    console.log("inside get products");
    return (dispatch, getState) => {
        Axios.get(baseUrl + productsUri).then((response) => {
            console.log("Products: ", response.data);
            let products = response.data.data.map((product) => {
                let filename;
                if(product.originalname){
                    filename = baseUrl + product.originalname.substr(1, product.originalname.length).replace("\\", "/");
                }
                return {
                    _id:product._id,
                    productDetail: product.productDetail,
                    productCode: product.productCode,
                    productCategory: product.productCategory,
                    productSubcategory: product.productSubcategory,
                    productQuantity: product.productQuantity,
                    productPosition: product.productPosition,
                    productOrder: product.productOrder,
                    filename: product.filename,
                    originalname: filename,
                };
            });
            dispatch(updateProducts(products));
        })
    }
}

const updateProducts = (products) => {
    console.log(products);
    return {
        type: UPDATE_PRODUCTS,
        products: products
    };
}
const updateProduct = (products) => {
    console.log(products);
    return {
        type: UPDATE_PRODUCT,
        products: products
    };
}

export const addProduct = (product) => {
    return (dispatch, getState) => {
        dispatch(loading());
        const data = new FormData();

        data.append("myimage", product.selectedFile, product.selectedFile.name);
        data.append("productDetail", product.productDetail);
        data.append("productCode", product.productCode);
        data.append("productCategory", product.productCategory);
        data.append("productSubcategory", product.productSubcategory);
        data.append("productQuantity", product.productQuantity);
        data.append("productPosition", product.productPosition);
        data.append("productOrder", product.productOrder);
        Axios.post(baseUrl + productsUri, data).then(response => {
            console.log(response.data);
            if(response.data.errorproductCode){
                dispatch(error(response.data.errorproductCode));
            }
            if (getState().products.products === null) {
                dispatch(getProducts());
            } else {
              //TODO
                //dispatch(addProductCreator(response.data.data));
            }
        })
    }
};
export const ProductUpdated = (product) => {
    return (dispatch, getState) => {
        dispatch(loading());
        const data = new FormData();
        console.log("[ProductActions] MyProduct addProduct - product: ", product);
        data.append("productDetail", product.productDetail);
        data.append("productCode", product.productCode);
        data.append("productCategory", product.productCategory);
        data.append("productSubcategory", product.productSubcategory);
        data.append("productQuantity", Number(product.productQuantity));
        data.append("productPosition", product.productPosition);
        data.append("productOrder", product.productOrder);
          data.append("productOrder", product.wantToadd);
        Axios.post(baseUrl + productsUri+updateUri, product).then(response => {
            console.log(response.data);
            if(response.data.errorproductCode){
                dispatch(error(response.data.errorproductCode));
            }
            if (getState().products.products === null) {
                dispatch(getProducts());
            } else {
          
               //TODO UPDATE ALL LIST
                dispatch(updateProduct(response.data.data));
            }
        })
    }
};
//           TODO
// const addProductCreator = (product) => {
//     return {
//         type: ADD_PRODUCT,
//         product: product
//     };
// }

export const filterProducts = (productCategory) => {
  console.log("filterProduct",productCategory);
  return {
      type: FILTER_PRODUCT,
      productCategory: productCategory,
  }
}
export const filterProductsSubcategory = (productSubcategory) => {
  console.log("filterProduct",productSubcategory);
  return {
      type: FILTER_PRODUCT_SUBCATEGORY,
      productSubcategory: productSubcategory,
  }
}
export const setProductsSpecks = (spesificProduct) =>{
  console.log("setting products specks",spesificProduct);
  return {
      type: PRODUCTSID,
      product:spesificProduct,
  }
}
export const cachedProducts = () =>{
  return {
      type: CACHED_PRODUCTS,
  }
}
export const deleteProduct = (productCode) => {
    return (dispatch, getState) => {
        Axios.delete(baseUrl + productsUri + deleteUri, { data: { productCode: productCode }}).then(response =>{
            const product = {
                ...response.data
            }
            dispatch(deleteProductAction(product.productCode))
        });
    }
}

const deleteProductAction = productCode => {
    return {
        type: DELETE_PRODUCT,
        productCode: productCode,
    }
}

const error = errorMessage => {
    return {
        type: ERROR,
        message: errorMessage
    };
}

const loading = () => {
    return {
        type: LOADING,
    }
}
export const filterProductsBySearchBar = (productCategory) => {
  console.log("filterProduct by SearchBar",productCategory);
  return {
      type: FILTER_PRODUCT_BY_SEARCH_BAR,
      productCategory: productCategory,
  }
}
