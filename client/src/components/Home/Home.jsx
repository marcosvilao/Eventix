import React, { useEffect, useState } from "react";
import AboutUs from "../About Us/AboutUs";
import Grid from "../Grid/Grid";
import Navbar from "../Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import "./home.css";

function Home() {
  const history = useHistory();
  const { isAuthenticated, user, logout } = useAuth0();


function handleClick(){
logout()
return history.push("/")
}
  // if(isAuthenticated && !emailVerified){
  //   return (
  //   <div>
  // <p>
  //  "please verify your email"
  //   </p>
  // <button onClick={() => history.go(0)}>RELOAD</button>
  //  </div>
  //  )
  // }else
  if (/unauthorized/.test(window.location.href)) {
    return (
    <div>
      <p>A verifitacion email has been sent to your email. After verification <a style={{color:"white", textDecoration:"underline"}} href="/profile">click here</a> to continue :D</p>
      <p>¿Can´t verify? Start over by <button onClick={() => handleClick()}>Clicking here</button></p>
    </div>);
  }
  return (
    <div>
      <Navbar />
      <AboutUs />
      <div className="grid">
        <Grid />
      </div>
    </div>
  );

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

export default Home;
