import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const callStart = () => {
    return {
        type: actionTypes.CALL_START
    };
};

export const getUserSuccess = (users) => {
  console.log("get users success",users);
    return {
        type: actionTypes.GET_USERS,
        users: users
    };
};

export const callFail = (error) => {
    return {
        type: actionTypes.CALL_FAIL,
        error: error
    };
};
export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};


export const getUsers = () => {
  console.log("here users");
 return dispatch => {
    dispatch(callStart());
   //todo async actions
   let url = `http://localhost:4040/api/users`;
  axios.get(url).
  then(res => {
    if(res.data.error){
        dispatch(callFail(res.data.error));
    }else{
    dispatch(getUserSuccess(res.data));
  }
    // dispatch(authSuccess(res));
  //  dispatch(saveResult(res));

  }).catch(err => {
                dispatch(callFail(err));
            });


 }

};
