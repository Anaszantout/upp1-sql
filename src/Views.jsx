import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import NewTodo from './NewTodo/NewTodo'
import Customer from './Customer/Customer'
import TodoList from './components/TodoLista/TodoList'



const Views = () => {
  return (
    
   
    <Routes>
     <Route path='/' element={ <Home/> } />
     <Route path='NewTodo/' element={ <NewTodo/> } />
     <Route path='Customer/' element={ <Customer/> } />
     <Route path='/:id' element={ < TodoList/> } />
     
     </Routes>
    
  )
}

export default Views