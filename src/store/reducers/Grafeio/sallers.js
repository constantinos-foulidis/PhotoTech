import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    sellers: null,
    filterSellers:null,
    loading: false,
    error: null,
    success: false,

}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SELLERS: return setSellers(state,action);
        case actionTypes.LOADING: return loading(state);
        case actionTypes.ERROR: return error(state, action.message);
        case actionTypes.FILTER_SELLER:return filterSeller(state,action.sellerName);

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

const setSellers = (state, action) => {
  console.log("setSeller",action);
    return updateObject(state, {
      sellers:action.sellers.Sellers,
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
