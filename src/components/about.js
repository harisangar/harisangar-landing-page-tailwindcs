import React from 'react'
import { useNavigate } from "react-router-dom"

function About() {
  const navigate= useNavigate()
  return (
    <div className=" flex  justify-center items-center h-screen">
      <h1 className="mr-10 font-black text-xl "> About Us Page...</h1><br/>
      <button className=" border-2 rounded-md p-5 bg-gradient-to-r from-cyan-500 to-blue-500 "onClick={()=>navigate('/')}>back to home page </button>
    </div>
  )
}

export default About
