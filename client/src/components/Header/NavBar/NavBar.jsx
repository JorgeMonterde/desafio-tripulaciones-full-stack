import {/*useState,*/ useContext} from "react";
// import { useNavigate } from "react-router-dom";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import UserIcon from '../../baseComponents/UserIcon/UserIcon';
import axios from "axios";
//contexts
import { LoggedInContext } from "../../../../contexts/loggedInContext";





const NavBar = () => { 
  const {loggedInState} = useContext(LoggedInContext);
  // const navigate = useNavigate();
  
  
  const linksNavBar = [
    {
      name: "Servicios",
      link: "/catalogue",
    },
    {
      name: "Casos de éxito",
      link: "/studyCases",
    },
    {
      name: "Nosotros",
      link: "/about",
    },
    {
      name: "Contacta",
      link: "/contact",
    }
  ];

  const linksCollapse = [
    {
      name: "Servicios",
      link: "/catalogue",
    },
    {
      name: "Casos de éxito",
      link: "/studyCases",
    },
      {
      name: "Nosotros",
      link: "/about",
    },
    {
      name: "Contacta",
      link: "/contact",
    }
  ];

      
  const handleLogOut = async () => {
    //logout
    const authResponse = await axios.get("/auth/logout", { withCredentials: true });
    console.log("auth response: ",authResponse)
    if(authResponse.data.success){
      //Redirect
      console.log("Logout successfull");
      loggedInState.changeLoggedInState(false);
      //navigate("/");
    } else {
      //Not logged out
      console.log("Could not logout");
    }
  };




  return (
    <>
      <Navbar className='navBar' isBordered>
        <Link to="/"><img className='navBar_logo' src='../../../../public/assets/Logo.png' alt='Logo' /></Link>
        <Navbar.Content className='navBar_layer' hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link bodyMCAPS' to={item.link} key={item.name} >{item.name}</Link>
          ))}

          <UserIcon className='user_icon' content='User@email' />

        </Navbar.Content>
        <Navbar.Brand>
          <Navbar.Toggle showIn="xs" />
        </Navbar.Brand>
        <Navbar.Collapse showIn="xs" className='collapse'>
          {linksCollapse.map((item) => (
            <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}

          <UserIcon className='user_icon' content='User@email' />

          <ul className='rrss'>
            <li className='collapse_icon'><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiFillFacebook/></a></li>
            <li className='collapse_icon'><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiOutlineInstagram /></a></li>
            <li className='collapse_icon'><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiOutlineTwitter /></a></li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;