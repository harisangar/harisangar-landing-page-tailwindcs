import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-end text-xl font-bold mx-4">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>  
    <Link to="/users">users</Link> 
    <Link to="/login">login</Link>  
    </nav>
  )
}

export default Navbar
