import React from "react";
import { LoginButton } from "./Login/LoginButton";
import {NavBar, Menu, Leftbar, Rightbar, H1,} from '../Styles/Styles'
import "./navbar.css";
// import Filters from "../Filters/Filters";

export default function Navbar() {



  return (

    <Menu>
      <NavBar>
        <Leftbar>
          <a href="/">
            <H1>Eventix</H1>
          </a>
          <a href="/aboutUs">
            <h3>About us</h3>
            {/* <aboutUs/> */}
          </a>
          <a href="/createevents">Create Events</a>
          <a href="/perfil">Profile</a>
        </Leftbar>
        <Rightbar>
          
          <LoginButton />
        </Rightbar>
      </NavBar>
    </Menu>
  );
}

