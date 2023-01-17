import React, {useState} from "react";
import { LoginButton } from "./Login/LoginButton";
import {NavBar, Menu, Leftbar, Rightbar, H1, H3} from '../Styles/Styles'
import "./navbar.css";
import Modal from '../createEvent/createEvent'
// import Filters from "../Filters/Filters";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [logeado, setLogeado] = useState(false)

  const islog = () => {
    setLogeado(true)
  }
  const openIt = () => {
    setIsOpen(true)
  }

  const closeIt = () => {
    setIsOpen(false)
  }

  return (

    <Menu>
      <NavBar>
        <Leftbar>
          <a href="/">
            <H1>Eventix</H1>
          </a>
          <a href="/aboutUs">
            <H3>About us</H3>
          </a>
           {logeado ? <a style={{cursor : 'pointer'}} onClick={openIt}>Create Events</a> : null} 
            
        </Leftbar>
        <Rightbar>
          {logeado ? <a href="/perfil">Profile</a> : null}
          <LoginButton islog={islog}/>
        </Rightbar>
      </NavBar>
      <Modal isopen={isOpen} close={closeIt}/>
    </Menu>
  );
}

