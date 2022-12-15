import React from 'react'
import AboutUs from '../About Us/AboutUs'
import Grid from '../Grid/Grid'
import Navbar from '../Navbar/Navbar'
import './home.css'



function Home() {


  return (
    <div>
        <Navbar/>
        <AboutUs/>
        <div className='grid'>
         <Grid/> 
        </div>
        
    </div>

  )
}

export default Home