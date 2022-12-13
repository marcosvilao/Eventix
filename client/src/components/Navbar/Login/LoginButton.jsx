import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  const {logout} = useAuth0()

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button><a href={`http://localhost:3000/` + "profile"}>Profile</a></button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
