const SET_REPOS = "SET_REPOS"
const SET_FETCHING = "SET_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE" 
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_FETCH_ERROR = "SET_FETCH_ERROR"


const defaultState = {
    items: [],
    isFetchingRepos: null,
    currentPage: 1,
    perPage: 4,
    totalCount: 0,
    isFetchError: false
}

export default function reposReducer(state = defaultState, action){
    switch(action.type){
        case SET_REPOS:
            return {
                ...state,
                items: action.payload,
                isFetchingRepos: false
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_FETCHING:
            return{
                ...state,
                isFetchingRepos: action.payload
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount: action.payload
            }
        case SET_FETCH_ERROR:
            return{
                ...state,
                isFetchError: action.payload
            }
        default:
             return state
    }
}

export const setRepos = (repos) => {return {type: SET_REPOS, payload: repos}}
export const setFetching = (bool) => {return {type: SET_FETCHING, payload: bool}}
export const setCurrentPage = (page) => {return {type: SET_CURRENT_PAGE, payload: page}}
export const setTotalCount = (repos) => {return {type: SET_TOTAL_COUNT, payload: repos}}
export const setFetchError = (bool) =>{return {type: SET_FETCH_ERROR, payload: bool}}
