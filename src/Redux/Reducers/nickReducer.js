export const SET_NICK = 'SET_NICK'

const defaultState = {
    nick: null
} 

export default function nickReducer(state = defaultState, action){
    switch(action.type) {
        case SET_NICK:
            return {
                nick: action.payload
            }
        default: return state
    }
}
