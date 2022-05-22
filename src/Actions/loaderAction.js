import { SET_IS_FETCHING } from "../Redux/Reducers/loaderReducer"

export const setLoader = (value) =>{
    return async (dispatch) =>{
        dispatch({type: SET_IS_FETCHING, payload: value})
    }
}