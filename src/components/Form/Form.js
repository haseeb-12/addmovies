import React from 'react'
import { useRef } from 'react'
import './form.css'
import Card from '../Card/Card'
import { useMovies } from '../../store/ContextProvider'

const Form = () => {
const {dispatch}=useMovies()

const movieInputRef=useRef()
const ratingInputRef=useRef()
const durationInputRef=useRef()

const handleSubmit=(e)=>{
    e.preventDefault()

    const enteredMovie=movieInputRef.current.value
    const enteredRating=ratingInputRef.current.value
    const enteredDuration=durationInputRef.current.value

dispatch({
    type:'ADD_MOVIES',
    payload:{
        enteredMovie,
        enteredRating,
        enteredDuration,
        id:new Date().getTime()
    }
})

// not recommended
movieInputRef.current.value=''
ratingInputRef.current.value=''
durationInputRef.current.value=''

}
    return (
        <Card>
        <form className='form_input' onSubmit={handleSubmit}>
            <div className='control'>
                <label htmlFor='movieName'>Movie Name</label>
                <input type='text' placeholder='Enter Movie Name' id='movieName' required ref={movieInputRef} />
            </div>
            <div className='control'>
                <label htmlFor='rating'>Ratings</label>
                <input type='number' placeholder='Enter Rating b/w 1-100' id='rating' required ref={ratingInputRef}/>
            </div>
            <div className='control'>
                <label htmlFor='duration'>Duration</label>
                <input type='text' placeholder='Enter duration in hours or minute' id='duration' required ref={durationInputRef}/>
            </div>
            <button>Add Movie</button>
        </form>
        </Card>
    )
}

export default Form