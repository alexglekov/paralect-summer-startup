const SET_AVATAR = 'SET_AVATAR'
const SET_NAME = 'SET_NAME'
const SET_FOLLOWERS = 'SET_FOLLOWERS'
const SET_FOllOWING = 'SET_FOLLOWING'
const SET_FETCHING = 'SET_FETCHING'

const defaultState = {
    avatar: '',
    name: '',
    nick: '',
    followers: 0,
    floowing: 0,
}

export default function profileReducer(state = defaultState, action){
    switch(action.type){
        case SET_AVATAR:
            return{
                ...state,
                avatar: action.payload,
            }
        case SET_NAME:
                return{
                    ...state,
                    name: action.payload,
            }
        case SET_FOLLOWERS:
            return{
                ...state,
                followers: action.payload,
            }
        case SET_FOllOWING:
            return{
                ...state,
                following: action.payload,
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetchingProfile: action.payload
            }
        default:
            return state
    }
}

export const setAvatar = (avatar) => {return {type: SET_AVATAR, payload: avatar}}
export const setName = (name) => {return {type: SET_NAME, payload: name}}
export const setFollowers = (followers) => {return {type: SET_FOLLOWERS, payload: followers}}
export const setFollowing = (following) => {return {type: SET_FOllOWING, payload: following}}