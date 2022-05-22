import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
import InitialState from './Components/MainScreen/InitialState/InitialState';
import LoadedState from './Components/MainScreen/LoadedState/LoadedState';
import EmptyState from './Components/MainScreen/EmptyState/EmptyState';
import { setFetchError } from './Redux/Reducers/reposReducer';

function App() {

  const dispatch = useDispatch()
  const nick = useSelector(state => state.nick.nick);
  const isFetching = useSelector(state => state.fetch.isFetching);
  const isFetchError = useSelector(state => state.repos.isFetchError)

  useEffect(() =>{
    dispatch(setFetchError(false))
  },[nick])

  return (
    <div className="App">
      <Header />
      {
      isFetchError === true ? <EmptyState /> : 
      (nick === '' ? <EmptyState /> : 
      (isFetching === true ? <Loader /> : 
      (nick ? <LoadedState/> : <InitialState/>)))
      }
    </div>
  );
}

export default App;
