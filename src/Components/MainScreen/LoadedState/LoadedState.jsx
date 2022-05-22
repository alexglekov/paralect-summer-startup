import React from 'react'
import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories'
import classes from "../LoadedState/LoadedState.module.css"

function LoadedState() {
  return (
    <div className={classes.loadedState}>
        <div className={classes.wrapper}>
            <Profile />
            <Repositories />
        </div>
    </div>
  )
}

export default LoadedState