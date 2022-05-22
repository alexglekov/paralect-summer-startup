import React from 'react'
import classes from '../Repositories/RepositoryItem.module.css'

function RepositoryItem({ title, description, nick}) {

  let titleShort = String(title)
  let descriptionShort = String(description)

  if (String(title).length > 30){
    titleShort = String(title).slice(0,40) + ' ...'
  }
  if(String(description).length > 100){
    descriptionShort = String(description).slice(0,100) + ' ...'
  }

  return (
    <a className={classes.repItemLink} href={`https://github.com/${nick}/${title}`} target="_blank">
      <div className={classes.repositoryItem}>
          <p className={classes.repositoryItemTitle}>{titleShort}</p>
          <p className={classes.repositoryItemDescription}>{descriptionShort}</p>
      </div>
    </a>
  )
}

export default RepositoryItem