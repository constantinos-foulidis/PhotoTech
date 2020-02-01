import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';
const initialState = {
    users:[],
    loading:false,
    allUsers:[],
    error:null,
    deleted:false
};
let allusers=null;
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
const deleteUser = (state, action) => {
  console.log("insided delete reducer");
  let updateusers=state.users.filter(user => user._id !== action.id );
    return updateObject(state, {
      users: updateusers,
      deleted:true,
      error: null,
      loading: false
    });
};
const createUser = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: false
    });
};
const cachedUsers =(state,action) =>{
  return updateObject(state,{
     users:allusers,
  });
}

const filterUserByname = (state,fullname) => {
 if(allusers===null){
   allusers=state.users;
   let updateUsers = state.users.filter((users)=> users.fullName===fullname);
   console.log(updateUsers);
   return updateObject(state,{
     allUsers:state.users,
     users:updateUsers
   });
 }else{
   let updateUsers = allusers.filter((users)=> users.fullName==="test User");
   console.log(updateUsers);
     return updateObject(state,{
       users:updateUsers
     });
 }
};

const filterUser = (state,username) => {
  console.log("username ",username);
  console.log("username ",""+username+"");
 if(allusers===null){
   allusers=state.users;
   let updateUsers = state.users.filter((users)=> users.username.toLowerCase().indexOf(username) > -1);
   console.log(updateUsers);
   return updateObject(state,{
     allUsers:state.users,
     users:updateUsers
   });
 }else{

   let updateUsers = allusers.filter((users)=> users.username.toLowerCase().indexOf(username) > -1);
   console.log(updateUsers);
     return updateObject(state,{
       users:updateUsers
     });
 }
};

 const userReducer = (state = initialState, action) => {
     switch(action.type){
      case actionTypes.CALL_START:return callStart(state,action);
      case actionTypes.CALL_FAIL: return callFail(state, action);
      case actionTypes.GET_USERS: return getUsers(state, action);
      case actionTypes.DELETE_USER: return deleteUser(state, action);
      case actionTypes.CREATE_USER: return createUser(state, action);
      case actionTypes.FILTER_USERS: return filterUser(state, action);
      case actionTypes.FILTER_FULLNAME: return filterUserByname(state, action);
      case actionTypes.CACHED_USERS: return cachedUsers(state, action);
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
