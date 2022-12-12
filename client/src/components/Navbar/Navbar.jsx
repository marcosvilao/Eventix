import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='left'>
        <h1>Eventix</h1>
        <h3>About us</h3>
        <h3>More</h3>
        <SearchBar/>
      </div>
      <div className='right'>
        <button>Log In</button>
        <button>Register</button>
      </div>
    </div>
  )
}
