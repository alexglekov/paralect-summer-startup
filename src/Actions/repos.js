import axios from 'axios'
import { setFetchError, setRepos, setTotalCount } from '../Redux/Reducers/reposReducer'
import { setLoader } from './loaderAction'

export const getRepos = (nickname, currentPage, perPage) =>{
    return async (dispatch) =>{
        try{
            setLoader(true)
            await axios.get(`https://api.github.com/users/${nickname}/repos?page=${currentPage}&per_page=${perPage}`)
            .then(res => {
                dispatch(setRepos(res.data))
                dispatch(setLoader(false))
            })
        }catch (e) {
            dispatch(setFetchError(true))
            dispatch(setLoader(false))
        }
    }
}

export const getTotalCount = (nickname) =>{
    return async (dispatch) =>{
        try{
            setLoader(true)
            await axios.get(`https://api.github.com/users/${nickname}`)
            .then(res => {
                dispatch(setTotalCount(res.data.public_repos))
                dispatch(setLoader(false))
            })
        }catch (e) {
            dispatch(setFetchError(true))
            dispatch(setLoader(false))
        }
    }
}