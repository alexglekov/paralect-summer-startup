import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../Actions/loaderAction'
import { setNick } from '../../Actions/nickAction'
import { getAvatar, getFollowers, getFollowing, getName } from '../../Actions/profile'
import { setCurrentPage } from '../../Redux/Reducers/reposReducer'
import classes from "../Header/Header.module.css"

function Header() {

  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const runSearchEngine = () => {
    dispatch(setNick(inputValue))
    dispatch(setCurrentPage(1))
    dispatch(setLoader(true))
    dispatch(getFollowers(inputValue))
    dispatch(getFollowing(inputValue))
    dispatch(getName(inputValue))
    dispatch(getAvatar(inputValue))
  }

  const handleEnterPressed = (e) =>{
    if (e.key === 'Enter') {
        dispatch(setNick(inputValue))
        dispatch(setCurrentPage(1))
        dispatch(setLoader(true))
        dispatch(getFollowers(inputValue))
        dispatch(getFollowing(inputValue))
        dispatch(getName(inputValue))
        dispatch(getAvatar(inputValue))
    }
  }

  return (
    <div className={classes.header}>
        <div className={classes.wrapper}>
            <img
            className={classes.logo}
            src='img/Vector.png'
            alt='logo'
            />
            <div className={classes.inputBlock}>
              <img
              onClick={runSearchEngine}
              className={classes.inputBlockImg}
              src='img/image.png'
              alt='inputLogo'
              />
              <input
              onKeyPress={handleEnterPressed}
              onChange={e => setInputValue(e.target.value)}
              className={classes.inputBlockInput} 
              type='text' 
              placeholder='Enter GitHub username' 
              />
            </div>
        </div>
    </div>
  )
}

export default Header;