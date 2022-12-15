import React, { useEffect, useState } from 'react'
import AboutUs from '../About Us/AboutUs'
import Grid from '../Grid/Grid'
import Navbar from '../Navbar/Navbar'
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from "react-router-dom";
import './home.css'



function Home() {
  const [isVerified, setIsVerified] = useState(false)
  const history = useHistory()
  const { isAuthenticated, user } = useAuth0();

  const emailVerified = user?.email_verified
  
  if(isAuthenticated && !emailVerified){
    return (
    <div>
  <p>
   "please verify your email"
    </p>
  <button onClick={() => history.go(0)}>RELOAD</button>
   </div>
   )
  }else return (
    <div>
         <Navbar/>
         <AboutUs/>
         <div className='grid'>
          <Grid/> 
         </div>
     </div>
  )

  // return info ? (
  //   <div>
  //       <Navbar/>
  //       <AboutUs/>
  //       <div className='grid'>
  //        <Grid/> 
  //       </div>
        
  //   </div>

  // ) : (<div>
  //   <p>
  //   "please verify your email"
  //   </p>
  //   <button onClick={() => history.go(0)}>RELOAD</button>
  // </div>)
}

export default Home