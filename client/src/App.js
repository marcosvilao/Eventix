import React from 'react'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import aboutUs from './components/About Us/AboutUs';
import createEvent from './components/createEvent/createEvent';
import Perfil from './components/Perfil/Perfil';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./Redux/actions/index";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/"//https://eventix-production.up.railway.app/";//http://localhost:3001/

function App() {

  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const createUserFromDispatch = () => {
      if (isAuthenticated) {
        dispatch(createUser(user));
      }
    };
    createUserFromDispatch();
  }, [user, isAuthenticated, dispatch]);
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/home/:id"} component={Detail} />
        <Route exact path={"/aboutUs"} component={aboutUs} />
        <Route exact path={"/createevents"} component={createEvent} />
        <Route exact path={"/perfil"} component={Perfil} />
      </Switch>
    </div>
  );
}

export default App;
