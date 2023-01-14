import React from 'react'
import './moviesCard.css'
import { useMovies } from '../../store/ContextProvider'

const MovieCard = () => {
  const { state: { movies, input } } = useMovies()

  function searchData() {
    let filterMovies = [...movies]
    if (input.length > 2) {
      filterMovies = filterMovies.filter(data => data.enteredMovie.toLowerCase().includes(input))
    }
    return filterMovies
  }
  return (
    <div>
      {searchData().map(({ enteredMovie, enteredRating,id, enteredDuration }) => (
        <div className='movies__card' key={id}>
          <div>
            <h2>{enteredMovie}</h2>
            <p>{enteredRating}/100</p>
          </div>
          <p>{enteredDuration} Hrs</p>

        </div>
      ))}
    </div>
  )
}

export default MovieCard