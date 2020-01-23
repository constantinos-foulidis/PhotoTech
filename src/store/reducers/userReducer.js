import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    users:[],
    loading:false,
    error:null
};

const callStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};


const callFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    });
};

const getUsers = (state, action) => {
    return updateObject(state, {
      users:action.users,
      error: null,
      loading: false
    });
};

 const userReducer = (state = initialState, action) => {
     switch(action.type){
       case actionTypes.CALL_START:return callStart(state,action);
       case actionTypes.CALL_FAIL: return callFail(state, action);
       case actionTypes.GET_USERS: return getUsers(state, action);
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

export default userReducer;
