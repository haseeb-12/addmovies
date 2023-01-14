import React from 'react'
import Form from '../components/Form/Form'
import AddMovie from '../components/AddMovie/AddMovies'
import './movie.css'

const Movies = () => {
  return (
    <div className='movies_details'>
       <Form/> 
       <AddMovie/>
    </div>
  )
}

export default Movies