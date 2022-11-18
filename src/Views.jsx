import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import NewTodo from './NewTodo/NewTodo'
import Register from './Register/Register'



const Views = () => {
  return (

    <Routes>
          
     <Route path='/' element={ <Home/> } />
     <Route path='NewTodo/' element={ <NewTodo/> } />
     <Route path='Register/' element={ <Register/> } />
     
  </Routes>
  )
}

export default Views