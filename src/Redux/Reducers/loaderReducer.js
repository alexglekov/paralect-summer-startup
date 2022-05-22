export const SET_IS_FETCHING = 'SET_IS_FETCHING'

const defaultState = {
    isFetching: false
}

export default function fetchReducer(state = defaultState, action){
    switch(action.type){
        case SET_IS_FETCHING:
            return {
                isFetching: action.payload
            }
        default: return state
    }
}

