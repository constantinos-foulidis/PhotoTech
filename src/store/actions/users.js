import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const callStart = () => {
  return {
    type: actionTypes.CALL_START
  };
};

export const getUserSuccess = (users) => {
  console.log("get users success", users);
  return {
    type: actionTypes.GET_USERS,
    users: users
  };
};
export const createUserSuccess = (user) => {
  console.log(user);
  return {
    type: actionTypes.CREATE_USER
  };
};
export const deleteUserSuccess = (user) => {
  console.log(user);
  return {
    id:user._id,
    type: actionTypes.DELETE_USER
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
    let url = `http://167.172.109.106/api/users`;
    axios.get(url).
    then(res => {
      if (res.data.error) {
        dispatch(callFail(res.data.error));
      } else {
        dispatch(getUserSuccess(res.data));
      }
    }).catch(err => {
      dispatch(callFail(err));
    });
  }
};
export const createUser = (formdata) => {
  console.log("here users",formdata);
  return dispatch => {
    dispatch(callStart());
    //todo async actions
    let url = `http://167.172.109.106/api/users/`;
    axios.post(url,formdata).
    then(res => {
      console.log("onCreateUser",res);
      if (res.data.error) {
        dispatch(callFail(res.data.error));
      } else {
        dispatch(getUserSuccess(res.data));
      }
    }).catch(err => {
      dispatch(callFail(err));
    });
  }
};
export const deleteUser = (userName) => {
  console.log("here users",userName);
  return dispatch => {
    dispatch(callStart());
    //todo async actions
    let url = `http://167.172.109.106/api/users/delete`;
    axios.delete(url,userName).
    then(res => {
      console.log(res);
      if (res.data.error) {
        dispatch(callFail(res.data.error));
      } else {
        dispatch(deleteUserSuccess(res.data));
      }
    }).catch(err => {
      dispatch(callFail(err));
    });
  }
};
export const filterUsers = (username) => {

  return {
      type: actionTypes.FILTER_USERS,
      username: username,
  }
};
export const filterUsersFullname = (fullname) => {

  return {
      type: actionTypes.FILTER_FULLNAME,
      fullname: fullname,
  }
};
export const getCachedUsers = () =>{
  return {
    type: actionTypes.CACHED_USERS,
  }
};
