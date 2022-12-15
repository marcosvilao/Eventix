import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom"

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory()
  const { logout } = useAuth0();

  function accountHandler(){
    isAuthenticated ? history.push("/profile") : loginWithRedirect()
  }

  return (
    <div>
      <button onClick={() => accountHandler()}>My Account</button>

      {isAuthenticated && (
        <div>
          <button onClick={() => logout()}>Logout</button>
          {/* <button>
            <a href={`http://localhost:3000/` + "profile"}>Profile</a>
          </button> */}
        </div>
      )}
    </div>
  );
};
