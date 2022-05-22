import { SET_NICK } from "../Redux/Reducers/nickReducer"

export const setNick = (value) =>{
    return async (dispatch) =>{
        dispatch({type: SET_NICK, payload: value})
    }
}