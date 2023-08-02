import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, Button } from "@nextui-org/react";
import PropTypes from 'prop-types';
import axios from "axios";
//contexts
import { LoggedInContext } from "../../../../contexts/loggedInContext";



const UserIcon = ({userEmail='logado'}) => {
  const navigate = useNavigate();
  const {loggedInState} = useContext(LoggedInContext);

  const handleLogOut = async () => {
    //logout
    const authResponse = await axios.get("/auth/logout", { withCredentials: true });
    console.log("auth response: ",authResponse)
    if(authResponse.data.success){
      //Redirect
      console.log("Logout successfull");
      loggedInState.changeLoggedInState(false);
      navigate("/");
    } else {
      //Not logged out
      console.log("Could not logout");
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };


  return (
    <>
      <Tooltip content={`Usuario: ${userEmail}`} placement="bottom" trigger="hover"> 
        {loggedInState.loggedIn ? <Button auto flat onPress={navigateToProfile}> MI PERFIL </Button> : ""}

        <Button auto flat onPress={loggedInState.loggedIn ? handleLogOut : navigateToLogin }> {loggedInState.loggedIn ? "SALIR": "ENTRAR"} 
          <img src='../../../../public/assets/User.png' alt='user icon'/>
        </Button>
      </Tooltip>
    </>
  );
};

UserIcon.propTypes = {
  userEmail: PropTypes.string
};


export default UserIcon;