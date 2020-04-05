import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    sellers: null,
    appointments:null,
    customers:null,
    newCustomers:null,
    customersByYear:null,
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
        case actionTypes.CREATE_APPOINTMENT:return createdAppointment(state,action);
        case actionTypes.FILTER_CUSTOMERS_BY_YEAR:return filterCustomersByYear(state,action);
        case actionTypes.FILTER_CUSTOMERS_BY_NAME:return filterCustomersByName(state,action.cName);
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

  state.filterCustomers=state.customers;
  let updateAppointments=state.filterCustomers.filter(customers => customers.sellerName.toUpperCase() === sellerName.toUpperCase() );
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
const filterCustomersByName = (state, cName) => {
  console.log("customerByname",cName.toUpperCase());
  state.filterCustomers=state.customers;
  let filtercustomer = state.filterCustomers.filter(customers => customers.schoolName.toUpperCase().indexOf(cName.toUpperCase()) > -1 );
  console.log("inside reducer customers",filtercustomer);

    return updateObject(state, {
      filterCustomers:filtercustomer,
    });
};
const filterCustomersByYear = (state) => {
  state.customersByYear=state.customers;
  let updateAppointments=state.customersByYear.filter((customers) =>{
    if(customers.createdAt != null){
          return (new Date(Date.now())).getFullYear() === parseInt((customers.createdAt.substring(0,4)))
     }
  }
  );
  return updateObject(state, {
    customersByYear:updateAppointments,
  });
};

function monthDiff(dateFrom, dateTo) {
  let year = dateTo.substring(0,4);
  let month= dateTo.substring(5,7);
 return (parseInt(month)-1) - dateFrom.getMonth() +
   (12 * (parseInt(year) - dateFrom.getFullYear()))
}

const setSellers = (state, action) => {

    return updateObject(state, {
      sellers:action.sellers.Sellers,
      error: null,
      loading: false
    });
};
const createdAppointment = (state, action) => {

    return updateObject(state, {
      appointments:[...state.appointments,action.createdAppointment],
      error: null,
      loading: false
    });
};

const setAppointments = (state, action) => {

    return updateObject(state, {
      appointments:action.appointments,
      error: null,
      loading: false
    });
};
const setCustomers = (state, action) => {


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
