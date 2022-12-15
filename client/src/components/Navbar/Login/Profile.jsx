import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (
      <div>
        <div><img src={user.picture} alt="" /></div>
        <h2>{user.name}</h2>
        {JSON.stringify(user)}
      </div>
    )
    :
    "No iniciaste sesion"
    
  );
};
