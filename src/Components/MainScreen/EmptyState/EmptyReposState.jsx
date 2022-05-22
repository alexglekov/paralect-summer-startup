import React from 'react'
import classes from '../EmptyState/EmptyReposState.module.css'

function EmptyReposState() {
  return (
    <div className={classes.emptyReposState}>
        <div className={classes.wrapper}>
        <div className={classes.imgText}>
                <img className={classes.img} src='img/remp.png'/>
                <p className={classes.text}>Repository list is empty</p>
            </div>
        </div>
    </div>
  )
}

export default EmptyReposState