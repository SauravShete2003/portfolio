import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import sauravImg from "./saurav-image.png"
function Navbar() {
  return (
    <Link className='navbar-container'>
    
    <img src={sauravImg} alt={"saurav"} className='profile-img'/>
    <span className='my-blog'>Saurav Shete</span>
    <Link to={"/"} className='navbar-links'>Home</Link>
    <Link to={"/about"} className='navbar-links'>About</Link>
    <Link to={"/contact"} className='navbar-links'>Contact</Link>
    <Link to={"/contact"} className='navbar-links'>Projects</Link>

    </Link>
  )
}

export default Navbar
