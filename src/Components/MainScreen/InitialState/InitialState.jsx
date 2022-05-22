import React from 'react'
import classes from '../InitialState/InitialState.module.css'

function InitialState() {
  return (
    <div className={classes.initialState}>
        <div className={classes.wrapper}>
            <div className={classes.imgText}>
                <img className={classes.img} src='img/lupa.png'/>
                <p className={classes.text}>Start with searching<br/> a GitHub user</p>
            </div>
        </div>
    </div>
  )
}

export default InitialState