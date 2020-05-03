import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    photografers: null,
    appointments:null,
    appointmentsById:null,
    customers:null,
    newCustomers:null,
    customersByYear:null,
    filterphotografers:null,
    filterAppointments:null,
    filterCustomers:null,
    filterApointmetsByid:null,
    loading: false,
    error: null,
    success: false,
    customers:null
}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOGRAFERS: return setPhotografers(state,action);
        case actionTypes.LOADING: return loading(state);
        case actionTypes.ERROR: return error(state, action.message);
        // case actionTypes.FILTER_SELLER:return filterSeller(state,action.sellerName);
        case actionTypes.FILTER_PHOTO:return filterAppointments(state,action.photograferName);
        // case actionTypes.FILTER_CUSTOMERS:return filterCustomers(state,action.sellerCode);
        case actionTypes.GET_APPOINTMENTS:return setAppointments(state,action);
        case actionTypes.GET_CUSTOMERS:return setCustomers(state,action);
        case actionTypes.CREATE_APPOINTMENT:return createdAppointment(state,action);
        case actionTypes.GET_APPOINTMENTSBYID:return getAppointmentsByID(state,action);
      //  case actionTypes.FILTER_CUSTOMERS_BY_YEAR:return filterCustomersByYear(state,action);
        default: return state;
    }
}

// const filterSeller = (state, sellerName) => {
//   state.filterphotografers=state.photografers;
//
//   let updateproducts=state.filterphotografers.filter(seller => seller.sellername === sellerName );
//     return updateObject(state, {
//       filterphotografers:updateproducts,
//     });
// };
const filterAppointments = (state, id) => {
   state.filterAppointments=state.photografers;
   var local=state.Allappointments;
   let updateAppointments=state.filterAppointments.filter(appointments => appointments._id === id );
   let updateAppointmentsByID=local.filter(appointments => appointments.sellerid === id );
     return updateObject(state, {
       appointments:updateAppointments,
       filterApointmetsByid:updateAppointmentsByID,
     });
 };
// const filterCustomers = (state, sellerName) => {
//   console.log("inside reducer customers",sellerName.toUpperCase());
//   state.filterCustomers=state.customers;
// console.log("inside reducer customers",state.customers);
//   let updateAppointments=state.filterCustomers.filter(customers => customers.sellerName.toUpperCase() === sellerName.toUpperCase() );
//   console.log("inside reducer customers",updateAppointments);
//   let temp = updateAppointments;
//   let newCustomers =  temp.filter((customers) => {
//       if(customers.createdAt != null){
//            return monthDiff(new Date(Date.now()),customers.createdAt) <= 2
//       }
//   } )
//     return updateObject(state, {
//       filterCustomers:updateAppointments,
//       newCustomers:newCustomers,
//     });
// };
// const filterCustomersByYear = (state) => {
//   state.customersByYear=state.customers;
//   let updateAppointments=state.customersByYear.filter((customers) =>{
//     if(customers.createdAt != null){
//       console.log((new Date(Date.now())).getFullYear());
//       console.log(customers.createdAt.substring(0,4));
//       console.log((new Date(Date.now())).getFullYear() === parseInt((customers.createdAt.substring(0,4))));
//           return (new Date(Date.now())).getFullYear() === parseInt((customers.createdAt.substring(0,4)))
//      }
//   }
//   );
//   console.log("filter by year",updateAppointments);
//   return updateObject(state, {
//     customersByYear:updateAppointments,
//   });
// };

// function monthDiff(dateFrom, dateTo) {
//   let year = dateTo.substring(0,4);
//   let month= dateTo.substring(5,7);
//  return (parseInt(month)-1) - dateFrom.getMonth() +
//    (12 * (parseInt(year) - dateFrom.getFullYear()))
// }

const setPhotografers = (state, action) => {
  console.log("setphotografers",action);
    return updateObject(state, {
      photografers:action.photografers,
      error: null,
      loading: false
    });
};
const createdAppointment = (state, action) => {
  console.log("setCreatedAppointmet",action);
    return updateObject(state, {
      appointments:[...state.appointments,action.createdAppointment],
      error: null,
      loading: false
    });
};

const setAppointments = (state, action) => {
  console.log("setAppointments",action);
    return updateObject(state, {
      Allappointments:action.appointments,
      error: null,
      loading: false
    });
};
const getAppointmentsByID = (state, action) => {
  console.log("getAppointmentsByID",action);
    return updateObject(state, {
      appointmentsById:action.appointments,
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
