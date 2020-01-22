import axios from 'axios';
export const LOGIN = "LOGIN";


export const saveResult = (res) =>{
  console.log(res);
  return{
     type: LOGIN,
     result: res
   };
}

export const login = (formdata) => {
  console.log("here data",formdata);
 return dispatch => {
   //todo async actions
   let url = `http://localhost:4040/api/auth/login`;
  axios.post(url,formdata).
  then(res => {
  //  if(res.status == 'success'){
    dispatch(saveResult(res));
      //}else{
    dispatch(saveResult(res));
 //  }
  })


 }

};
