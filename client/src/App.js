import React from 'react'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import { Profile } from "./components/Navbar/Login/Profile";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/home/:id"} component={Detail} />
        <Route exact path={"/profile"} component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
