import Axios from "axios";
import FormData from 'form-data';

const baseUrl = 'http://localhost:4040/';
const sellersUri = 'api/sellers';
const uniqueSellers = '/under';
const updateUri='/update';
export const GET_SELLERS = "GET_SELLERS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const FILTER_SELLER = "FILTER_SELLER";






const getSellerSuccess = (sellers) => {

    return {
        type: GET_SELLERS,
        sellers: sellers
    };
}
export const filterSeller = (sellerName) => {
  console.log("Seller Name",sellerName);
  return {
      type: FILTER_SELLER,
      sellerName: sellerName,
  }
}
export const getSeller = (sellerCode) => {
    return (dispatch, getState) => {
        dispatch(loading());
        console.log(sellerCode);

        const data = {
          sellerCode:sellerCode
        }



          console.log("sallerCorde", data);
        Axios.post(baseUrl + sellersUri+uniqueSellers, data).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data.errorproductCode));
            }else{

                dispatch(getSellerSuccess(response.data));

            }

        })
    }
};


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
