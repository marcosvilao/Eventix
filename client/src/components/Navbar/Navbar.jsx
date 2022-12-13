import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./Login/LoginButton";
import {Profile} from './Login/Profile'

import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="/">
          <h1>Eventix</h1>
        </a>
        <h3>About us</h3>
        <h3>More</h3>
        <SearchBar />
      </div>
      <div className="right">
        <LoginButton />
      </div>
    </div>
  );
}
