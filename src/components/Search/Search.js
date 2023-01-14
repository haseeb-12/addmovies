import React from 'react'
import { useMovies } from '../../store/ContextProvider'
import './search.css'
const Search = () => {
  const {dispatch} =useMovies()
  return (
    <>
      <input className='input_search' placeholder='Search move by name' onChange={(e)=>dispatch({
        type:'SEARCH',
        payload:e.target.value
      })}/>  
    </>
  )
}

export default Search