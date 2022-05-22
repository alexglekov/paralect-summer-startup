import React from 'react'
import classes from '../EmptyState/EmptyState.module.css'

function EmptyState() {
  return (
    <div className={classes.emptyState}>
        <div className={classes.wrapper}>
            <div className={classes.imgText}>
                <img className={classes.img} src='img/Union.png'/>
                <p className={classes.text}>User not found</p>
            </div>
        </div>
    </div>
  )
}

export default EmptyState