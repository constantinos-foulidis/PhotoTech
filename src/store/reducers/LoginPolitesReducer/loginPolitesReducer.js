
import * as actionTypes from '../../actionTypes';
import { updateObject } from '../../utility';
const initialState = {
    isLogedInPOLITES: false,
    sellerData:null,
    userName:"none",
    sellerID:null,
    loading:false,
    error:null
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
  console.log("Photografers login",action);
 localStorage.setItem('uniqueSellerID', JSON.stringify(action.data._id));
 localStorage.setItem('isLogedIn', JSON.stringify(true));



    return updateObject( state, {
        userName: action.userName,
        sellerData: action.data,
        isLogedInPOLITES:true,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        sellerCode:null,
    });
};

const authLogout = (state, action) => {
//  localStorage.clear();
    return updateObject(state, { sellerCode: null, isLogedInPhoto: false,userName: null });
};

 const loginAuthPolitesReducer = (state = initialState, action) => {
     switch(action.type){
       case actionTypes.AUTH_STARTPOLITES:return authStart(state,action);
       case actionTypes.AUTH_SUCCESSPOLITES: return authSuccess(state, action);
       case actionTypes.AUTH_FAILPOLITES: return authFail(state, action);
       case actionTypes.AUTH_LOGOUTPOLITES: return authLogout(state, action);
       default:
           return state;
     }
/*
    if(action.type === LOGIN){
        return {
            ...state,
            isLogedIn: action.result.data.isLogedIn,
            isAdmin: action.result.data.isAdmin,
            userName: action.result.data.userName,
        }
    }
    return state;
    */
};

export default loginAuthPolitesReducer;
