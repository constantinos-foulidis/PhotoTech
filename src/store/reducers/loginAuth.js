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
            isLogedIn: action.result.isLogedIn,
            isAdmin: action.result.isAdmin,
            userName: action.result.userName,
        }
    }
    return state;
}
