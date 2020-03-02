import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';


const initialState = {
    sellers: null,
    allSellers:null,
    loading: false,
    error: null,
    success: false,

}

const sellerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SELLERS: return setSellers(state,action);
        case actionTypes.LOADING: return loading(state);
        case actionTypes.ERROR: return error(state, action.message);

        default: return state;
    }
}

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
