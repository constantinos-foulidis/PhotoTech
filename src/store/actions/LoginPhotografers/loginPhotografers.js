import axios from 'axios';
import * as actionTypes from '../../actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (username, sellerCode,photograferCode) => {
    console.log("userName",username);
    console.log("isadmin",sellerCode);
    console.log("isadmin",photograferCode);
  //  localStorage.setItem('officeLogedin', JSON.stringify(true));
  //  localStorage.setItem('userName', JSON.stringify(username));
  //  localStorage.setItem('sellerID', JSON.stringify(sellerCode));
  //  localStorage.setItem('photograferID', JSON.stringify(photograferCode));


    return {
        type: actionTypes.AUTH_SUCCESS,
        userName: username,
        sellerCode: sellerCode
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const logout = () => {
  console.log("inside logout");
  localStorage.clear();
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
  //photografername
  console.log("here data",formdata);
 return dispatch => {
    dispatch(authStart());
   //todo async actions
   let url = `http://localhost:4040/api/auth/Photografoi/login`;
   //lo
  axios.post(url,formdata).
  then(res => {
    if(res.data.error){
        dispatch(authFail(res.data.error));
    }else{
    dispatch(authSuccess(res.data.username,res.data.sellerCode,res.data.photograferCode));
  }
    // dispatch(authSuccess(res));
  //  dispatch(saveResult(res));

  }).catch(err => {
                dispatch(authFail(err));
            });


 }

};
