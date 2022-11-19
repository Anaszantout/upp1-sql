import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light white">

  <div className="container">

    <a className="navbar-brand" href="/">Todo lista </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
      aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav">

      <ul className="navbar-nav mr-auto ">
        <li><NavLink to="/" end className='nav-link'>Home</NavLink></li>
        <li><NavLink to="/NewTodo" end className='nav-link'>Add New Todo</NavLink></li>
        <li><NavLink to="/Customer" end className='nav-link'>Customer</NavLink></li>
       
        
      </ul>
      
      
    </div>

  </div>

</nav>
  )
}

export default Navbar