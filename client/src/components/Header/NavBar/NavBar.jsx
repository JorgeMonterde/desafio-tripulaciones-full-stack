import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

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

  return (
    <>
      <Navbar className='navBar' isBordered>
        <Link to="/"><img className='navBar_logo' src='../../../../public/assets/vite.svg' alt='Logo' /></Link>
        <Navbar.Content className='navBar_layer' hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link' to={item.link} key={item.name} >{item.name}</Link>
          ))}
          <Link to="login"><button>login</button></Link>
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