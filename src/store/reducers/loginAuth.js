import { LOGIN } from '../actions/loginAuth'
const initialState = {
    isLogedIn: false,
    isAdmin:"nothing",
    userName:"none"
}


export const loginAuthReducer = (state = initialState, action) => {
    if(action.type === LOGIN){
        return {
            ...state,
            isLogedIn: action.result.data.isLogedIn,
            isAdmin: action.result.data.isAdmin,
            userName: action.result.data.userName,
        }
    }
    return state;
}
