import React, {useContext, useEffect} from 'react'
import { UserContext } from '../App'
import req from '../base/req'
import { MovieCards } from './MovieCards'

export const Banner = () => {
  const {state, dispatch} = useContext(UserContext)


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${req.fetchNetflixOriginals}`)
      .then(response => response.json())
      .then(res => {
        dispatch({type: "CHANGE_ORIGINALS", payload: res})
      })
  }, [])

  console.log(state.originals);
  
  return (
    <div className='banner'>
    <div className='container'>
      <h1 className='banner_title'>Netflix Originals</h1>
        {state.originals.results ? (
          <MovieCards movie={state.originals.results}/>
        ) : <MovieCards movie={state.originals}/>}
    </div>
    </div>
  )
}
