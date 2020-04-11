import Axios from "axios";
import FormData from 'form-data';

const baseUrl = 'http://167.172.109.106/';
const photografersUri = 'api/photo';
const uniquePhotografer = '/under';
const updateUri='/update';
const sellersAppointmentUri='api/appointments';
const customersUri='api/customers';
export const GET_PHOTOGRAFERS = "GET_PHOTOGRAFERS";
export const GET_APPOINTMENTS = "GET_APPOINTMENTS";
export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const CREATE_APPOINTMENT = "CREATE_APPOINTMENT";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const FILTER_SELLER = "FILTER_SELLER";
export const FILTER_PHOTO = "FILTER_PHOTO";
export const FILTER_CUSTOMERS = "FILTER_CUSTOMERS";
export const FILTER_CUSTOMERS_BY_YEAR = "FILTER_CUSTOMERS_BY_YEAR";




const getAppointmentSuccess = (appointments) => {

    return {
        type: GET_APPOINTMENTS,
        appointments: appointments
    };
};
const createAppointmentSuccess = (appointment) => {

    return {
        type: CREATE_APPOINTMENT,
        createdAppointment: appointment
    };
}
const getCustomerSuccess = (customers) => {

    return {
        type: GET_CUSTOMERS,
        customers: customers
    };
}

const getPhotograferSuccess = (photografers) => {
   console.log("eimai photografoi",photografers);
    return {
        type: GET_PHOTOGRAFERS,
        photografers: photografers
    };
}
// export const filterSeller = (sellerName) => {
//   console.log("Seller Name",sellerName);
//   return {
//       type: FILTER_SELLER,
//       sellerName: sellerName,
//   }
// }
 export const filterPhotografers = (photograferName) => {

   return {
       type: FILTER_PHOTO,
      photograferName: photograferName,
   }
 }
// export const filterCustomers = (sellerCode) => {
//   console.log("Seller Code",sellerCode);
//   return {
//       type: FILTER_CUSTOMERS,
//       sellerCode: sellerCode,
//   }
// }
// export const filterCustomersByYear = () => {
//
//   return {
//       type: FILTER_CUSTOMERS_BY_YEAR,
//   }
// }
export const getPhotografers = (photograferCode) => {
    return (dispatch, getState) => {
        dispatch(loading());
        console.log(photograferCode);
        const data = {
          photograferCode:photograferCode
        }
          console.log("sallerCorde", data);
        Axios.post(baseUrl + photografersUri+uniquePhotografer, data).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data.errorproductCode));
            }else{
                dispatch(getPhotograferSuccess(response.data.Photografer));
            }

        })
    }
};
export const getPhotografersAppointments = () => {
    return (dispatch, getState) => {
        dispatch(loading());
        Axios.get(baseUrl + sellersAppointmentUri).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data));
            }else{
                dispatch(getAppointmentSuccess(response.data));
            }

        })
    }
};
export const createPhotograferAppointment = (data) => {
    console.log(data);
    return (dispatch, getState) => {
        dispatch(loading());
        Axios.post(baseUrl + sellersAppointmentUri,data).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data));
            }else{
                dispatch(createAppointmentSuccess(response.data));
            }

        })
    }
};

export const getCustomers = () => {
    return (dispatch, getState) => {
        dispatch(loading());
        Axios.get(baseUrl + customersUri).then(response => {
            console.log(response.data);
            if(response.data.error){
                dispatch(error(response.data));
            }else{
                dispatch(getCustomerSuccess(response.data));
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
