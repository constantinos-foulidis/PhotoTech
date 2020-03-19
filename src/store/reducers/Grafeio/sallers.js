import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    sellers: null,
    appointments:null,
    customers:null,
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
const filterCustomers = (state, sellerCode) => {
  console.log("inside reducer customers",sellerCode.toUpperCase());
  state.filterCustomers=state.customers;
console.log("inside reducer customers",state.customers);
  let updateAppointments=state.filterCustomers.filter(customers => customers.sellerCode === sellerCode.toUpperCase() );
  console.log("inside reducer customers",updateAppointments);
    return updateObject(state, {
      filterCustomers:updateAppointments,
    });
};

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
