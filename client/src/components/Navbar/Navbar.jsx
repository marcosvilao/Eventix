import React from "react";
import { LoginButton } from "./Login/LoginButton";
import {NavBar, Menu, Leftbar, Rightbar, MenuFilter, H1, Pages} from '../Styles/Styles'
import "./navbar.css";
import Filters from "../Filters/Filters";

export default function Navbar() {



  return (

    <Menu>
      <NavBar>
        <Leftbar>
          <a href="/">
            <H1>Eventix</H1>
          </a>
          <a href="/aboutUs">
            <Pages>About us</Pages>
            {/* <aboutUs/> */}
          </a>
          <a href="/createevents">
            <Pages>Create Events</Pages>
            </a>
        </Leftbar>
        <Rightbar>
          <LoginButton />
        </Rightbar>
      </NavBar>
    </Menu>
  );
}

