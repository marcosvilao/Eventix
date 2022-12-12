import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
          <a href="/">
        <h1>
            Eventix
        </h1>
          </a>
        <h3>About us</h3>
        <h3>More</h3>
        <SearchBar />
      </div>
      <div className='right'>
        <button>Log In</button>
        <button>Register</button>
      </div>
    </div>
  )
}
