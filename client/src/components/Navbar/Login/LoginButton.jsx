import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useHistory } from "react-router-dom";
import { Avatar, IconButton, Modal } from '@mui/material';
import {CiLogin} from 'react-icons/ci';
import Loading from '../../Loading/Loading'


export const LoginButton = ({islog}) => {
  const { loginWithRedirect, isAuthenticated, user, isLoading, getAccessTokenSilently, error, logout  } = useAuth0();
  const [jwt, setJwt] = useState(null);

  async function loginHandler() {
    await loginWithRedirect()
  }

  useEffect(() => {
    const getJWT = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setJwt(token);
        localStorage.setItem("jwt", token);
      }
    };
    getJWT();
  }, [isAuthenticated, getAccessTokenSilently]);

  function logoutHandler() {
    localStorage.removeItem("jwt");
    setJwt(null);
    logout()
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div>

      {!isAuthenticated ? (<IconButton  onClick={() => loginHandler()}>
            <CiLogin style={{ fontSize: 45, color: "white" }} color="primary"/>
          </IconButton>) : (
        <div>
          <IconButton>{islog()}
              <Avatar alt="p" src={user?.picture} size="lg"/>
          </IconButton>
          <IconButton  onClick={() => logoutHandler()}>
            <CiLogin style={{ fontSize: 45, color: "white" }} />
          </IconButton>
          {/* <p>JWT: {jwt}</p> */}
        </div>
      )}
      {/* <Modal
      style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        open={modalIsOpen}
        onClose={closeModal}
      >
        <div>
        <img src={user?.picture} alt=''/>
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <a href="/perfil">Purchase history</a>
        </div>
      </Modal> */}
    </div>
  );
};
