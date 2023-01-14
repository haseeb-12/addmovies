import { createContext, useContext, useReducer, useState } from 'react'
import {reducer} from './reducer'



const SearchContext = createContext()

export const ContextProvider = ({ children }) => {
    const[state,dispatch]=useReducer(reducer,{
       movies:[] ,
       input:'',
    })

    return (
        <SearchContext.Provider value={{state,dispatch}}>{children}</SearchContext.Provider>
    )
}

export const useMovies=()=>{
    return useContext(SearchContext)
}