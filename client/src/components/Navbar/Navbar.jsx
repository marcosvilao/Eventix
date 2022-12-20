import React from "react";
import { LoginButton } from "./Login/LoginButton";
import styled from 'styled-components'

import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";
// import {aboutUs} from "../About Us/AboutUs";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <h1>Eventix</h1>
        </a>
        <a href="/aboutUs">
          <h3>About us</h3>
          {/* <aboutUs/> */}
        </a>
        <h3>More</h3>
        <SearchBar />
      </div>
      <div className="right">
        <LoginButton />
      </div>
    </div>
  );
}
