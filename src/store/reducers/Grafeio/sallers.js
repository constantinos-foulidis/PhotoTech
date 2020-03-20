import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    sellers: null,
    appointments:null,
    customers:null,
    newCustomers:null,
    filterSellers:null,
    filterAppointments:null,
    filterCustomers:null,
    loading: false,
    error: null,
    success: false,
    customers:null
}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SELLERS: return setSellers(state,action);
        case actionTypes.LOADING: return loading(state);
        case actionTypes.ERROR: return error(state, action.message);
        case actionTypes.FILTER_SELLER:return filterSeller(state,action.sellerName);
        case actionTypes.FILTER_APPOINTMENTS:return filterAppointments(state,action.sellerCode);
        case actionTypes.FILTER_CUSTOMERS:return filterCustomers(state,action.sellerCode);
        case actionTypes.GET_APPOINTMENTS:return setAppointments(state,action);
        case actionTypes.GET_CUSTOMERS:return setCustomers(state,action);
        default: return state;
    }
}

const filterSeller = (state, sellerName) => {
  state.filterSellers=state.sellers;

  let updateproducts=state.filterSellers.filter(seller => seller.sellername === sellerName );
    return updateObject(state, {
      filterSellers:updateproducts,
    });
};
const filterAppointments = (state, sellerCode) => {
  state.filterAppointments=state.appointments;

  let updateAppointments=state.filterAppointments.filter(appointments => appointments.sellerCode === sellerCode );
    return updateObject(state, {
      Appointments:updateAppointments,
    });
};
const filterCustomers = (state, sellerName) => {
  console.log("inside reducer customers",sellerName.toUpperCase());
  state.filterCustomers=state.customers;
console.log("inside reducer customers",state.customers);
  let updateAppointments=state.filterCustomers.filter(customers => customers.sellerName.toUpperCase() === sellerName.toUpperCase() );
  console.log("inside reducer customers",updateAppointments);
  let temp = updateAppointments;
  let newCustomers =  temp.filter((customers) => {
      if(customers.createdAt != null){
           return monthDiff(new Date(Date.now()),customers.createdAt) <= 2
      }
  } )
    return updateObject(state, {
      filterCustomers:updateAppointments,
      newCustomers:newCustomers,
    });
};

function monthDiff(dateFrom, dateTo) {
  let year = dateTo.substring(0,4);
  let month= dateTo.substring(5,7);
 return (parseInt(month)-1) - dateFrom.getMonth() +
   (12 * (parseInt(year) - dateFrom.getFullYear()))
}

const setSellers = (state, action) => {
  console.log("setSeller",action);
    return updateObject(state, {
      sellers:action.sellers.Sellers,
      error: null,
      loading: false
    });
};
const setAppointments = (state, action) => {
  console.log("setAppointments",action);
    return updateObject(state, {
      appointments:action.appointments,
      error: null,
      loading: false
    });
};
const setCustomers = (state, action) => {
  console.log("setCustomers",action);

    return updateObject(state, {
      customers:action.customers,
      error: null,
      loading: false
    });
};
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




export default sellerReducer;
