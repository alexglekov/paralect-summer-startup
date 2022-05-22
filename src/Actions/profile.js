import axios from "axios";
import { setAvatar, setFollowers, setFollowing, setName } from "../Redux/Reducers/profileReducer";
import { setFetchError } from "../Redux/Reducers/reposReducer";
import { setLoader } from "./loaderAction";

export const getName = (nickname) =>{
    return async (dispatch) =>{
        try{
        await axios.get(`https://api.github.com/users/${nickname}`)
        .then(res => {
            dispatch(setName(res.data.name))
            dispatch(setLoader(false))
        })
    }catch (e) {
        dispatch(setFetchError(true))
        dispatch(setLoader(false))
    }
    }
}

export const getFollowers = (nickname) =>{
    return async (dispatch) =>{
        try{
        await axios.get(`https://api.github.com/users/${nickname}/followers`)
        .then(res => {
            dispatch(setFollowers(res.data))
            dispatch(setLoader(false))
        })
    }catch (e) {
        dispatch(setFetchError(true))
        dispatch(setLoader(false))
    }
    }
}

export const getFollowing = (nickname) =>{
    return async (dispatch) =>{
        try{
        await axios.get(`https://api.github.com/users/${nickname}`)
        .then(res => {
            dispatch(setFollowing(res.data.following))
            dispatch(setLoader(false))
        })
    }catch (e) {
        dispatch(setFetchError(true))
        dispatch(setLoader(false))
    }
    }
}

export const getAvatar = (nickname) =>{
    return async (dispatch) =>{
        try{
        await axios.get(`https://api.github.com/users/${nickname}`)
        .then(res => {
            dispatch(setAvatar(res.data.avatar_url))
            dispatch(setLoader(false))
        })
    }catch (e) {
        dispatch(setFetchError(true))
        dispatch(setLoader(false))
    }
    }
}