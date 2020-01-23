
import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    isLogedIn: false,
    isAdmin:null,
    userName:"none",
    loading:false,
    error:null
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        isAdmin: action.isAdmin,
        userName: action.username,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
        isAdmin:null,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { isAdmin: null, isLogedIn: null,userName: null });
};

 const loginAuthReducer = (state = initialState, action) => {
     switch(action.type){
       case actionTypes.AUTH_START:return authStart(state,action);
       case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
       case actionTypes.AUTH_FAIL: return authFail(state, action);
       case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
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

export default loginAuthReducer;
