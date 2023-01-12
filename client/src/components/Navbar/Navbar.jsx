import React from "react";
import { LoginButton } from "./Login/LoginButton";
import {NavBar, Menu, Leftbar, Rightbar, H1, H3} from '../Styles/Styles'
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
            <H3>About us</H3>
          </a>
          <a href="/createevents">
            <H3>Create Events</H3>
          </a>
          <a href="/perfil">
            <H3>Profile</H3>
          </a>
        </Leftbar>
        <Rightbar>
          
          <LoginButton />
        </Rightbar>
      </NavBar>
    </Menu>
  );
}

