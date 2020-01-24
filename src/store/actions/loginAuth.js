import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (username, isAdmin) => {
    console.log("userName",username);
    console.log("isadmin",isAdmin);
    return {
        type: actionTypes.AUTH_SUCCESS,
        userName: username,
        isAdmin: isAdmin
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
export const saveResult = (res) =>{
  console.log(res);
  return{
     type: actionTypes.AUTH_SUCCESS,
     result: res
   };
}

export const login = (formdata) => {
  console.log("here data",formdata);
 return dispatch => {
    dispatch(authStart());
   //todo async actions
   let url = `http://localhost:4040/api/auth/login`;
  axios.post(url,formdata).
  then(res => {
    if(res.data.error){
        dispatch(authFail(res.data.error));
    }else{
    dispatch(authSuccess(res.data.username,res.data.isAdmin));
  }
    // dispatch(authSuccess(res));
  //  dispatch(saveResult(res));

  }).catch(err => {
                dispatch(authFail(err));
            });


 }

};
