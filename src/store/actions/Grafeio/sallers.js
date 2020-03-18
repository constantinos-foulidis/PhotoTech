import Axios from "axios";
import FormData from 'form-data';

const baseUrl = 'http://localhost:4040/';
const sellersUri = 'api/sellers';
const uniqueSellers = '/under';
const updateUri='/update';
const sellersAppointmentUri='api/appointments';
export const GET_SELLERS = "GET_SELLERS";
export const GET_APPOINTMENTS = "GET_APPOINTMENTS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const FILTER_SELLER = "FILTER_SELLER";
export const FILTER_APPOINTMENTS = "FILTER_APPOINTMENTS";



const getAppointmentSuccess = (appointments) => {

    return {
        type: GET_APPOINTMENTS,
        appointments: appointments
    };
}

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
export const filterAppointments = (sellerCode) => {
  console.log("Seller Code",sellerCode);
  return {
      type: FILTER_APPOINTMENTS,
      sellerCode: sellerCode,
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
export const getSellersAppointments = () => {
    return (dispatch, getState) => {
        dispatch(loading());
        Axios.get(baseUrl + sellersAppointmentUri).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data.errorproductCode));
            }else{
                dispatch(getAppointmentSuccess(response.data));
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
