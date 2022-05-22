import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos, getTotalCount } from '../../../../Actions/repos'
import EmptyReposState from '../../EmptyState/EmptyReposState'
import classes from '../Repositories/Repositories.module.css'
import RepositoryItem from './RepositoryItem'
import ReactPaginate from 'react-paginate'

function Repositories() {

  const dispatch = useDispatch()
  const nick = useSelector(state => state.nick.nick)
  const repos = useSelector(state => state.repos.items)
  const currentPage = useSelector(state => state.repos.currentPage)
  const perPage = useSelector(state => state.repos.perPage)
  const totalCount = useSelector(state => state.repos.totalCount)
  const pagesCount = Math.ceil(totalCount/perPage)
  let totalCountShort = totalCount

  if(totalCount > 1000){
    totalCountShort = String((totalCount/1000).toFixed(1)) + "k"
  }

  const [value, setValue] = useState(1)
  const [itemsDisplayedStart, setItemsDisplayedStart] = useState(1)
  const [itemsDisplayedEnd, setItemsDisplayedEnd] = useState(5)

  useEffect(() => {
    dispatch(getRepos(nick, value, perPage))
    dispatch(getTotalCount(nick))
  }, [dispatch, nick, value])

  const handlePageClick = (data) =>{
    setValue(data.selected + 1)
    itemsDesplayedDetector(data.selected + 1)
  }

  const itemsDesplayedDetector = (currentPag) =>{
    let temp = Math.ceil((currentPag * totalCount)/pagesCount)
    let temp2 = Math.ceil(((currentPag - 1) * totalCount)/pagesCount)
    setItemsDisplayedStart(temp2 + 1)
    setItemsDisplayedEnd(temp + 1)
  }

  return (
    <div className={classes.repositories}>
      { 
        repos.length === 0 ? '' : <p className={ classes.repositoriesTitle}>Repositories ({totalCountShort})</p>
      }
      {
        repos.length === 0 ? <EmptyReposState /> : (repos.map((el) => <RepositoryItem title={el.name} description={el.description} nick={nick} />))
      }
      { repos.length === 0 ? '' : (
      <div className={classes.pag}>
        <div className={classes.reposAmounDescription}>
          {itemsDisplayedStart}-{itemsDisplayedEnd} of {totalCountShort} items
        </div>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pagesCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={classes.pagination}
          pageLinkClassName={classes.pageLink}
          pageClassName = {classes.pageClass}
          previousClassName={classes.stepBtn}
          nextClassName={classes.stepBtn}
          activeClassName={classes.activePage}
          activeLinkClassName={classes.activeLink}
        />
      </div>
      )}
    </div>
  )
}

export default Repositories