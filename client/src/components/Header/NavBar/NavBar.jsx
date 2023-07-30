import { Navbar } from "@nextui-org/react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../baseComponents/UserIcon/UserIcon';

const NavBar = () => {  
  const [isUserLog, setIsUserLog] = useState(false);
  /*agregar estado de sesion de usuario para cambiar  "isUserLog a true"*/

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

  const handleLogOut = () => {
    setIsUserLog(false);
    /*agregar código para cerrar sesión*/
  };

  return (
    <>
      <Navbar className='navBar' isBordered>
        <Link to="/"><img className='navBar_logo' src='../../../../public/assets/vite.svg' alt='Logo' /></Link>
        <Navbar.Content className='navBar_layer' hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link bodyMCAPS' to={item.link} key={item.name} >{item.name}</Link>
          ))}
          {isUserLog ? <Link to="/"><button className='TitleXS logOut_btn' onClick={handleLogOut}>Salir</button></Link> : <Link to="login"><button className='TitleXS login_btn'>Entrar</button></Link>}
          <UserIcon  className='user_icon' content='User@email'/>
        </Navbar.Content>
        <Navbar.Brand>
          <Navbar.Toggle showIn="xs" />
        </Navbar.Brand>
        <Navbar.Collapse showIn="xs" className='collapse'>
          {linksCollapse.map((item) => (
            <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;