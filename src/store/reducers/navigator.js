import { TOGGLE } from '../actions/navigator'
const initialState = {
    open: false
}


export const navigatorReducer = (state = initialState, action) => {
    if(action.type === TOGGLE){
        return {
            ...state,
            open: !state.open,
        }
    }
    return state;
}
