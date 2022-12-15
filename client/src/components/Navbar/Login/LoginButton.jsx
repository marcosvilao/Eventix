import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom"
import styled from 'styled-components'


export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const history = useHistory()

  

  function accountHandler(){
    isAuthenticated ? history.push("/profile") : loginWithRedirect()
  }

  return (
    <div>
      <button onClick={() => accountHandler()}>My Account</button>
      {isAuthenticated && (
        <div>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};
