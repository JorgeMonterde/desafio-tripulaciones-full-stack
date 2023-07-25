import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const linksNavBar = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "servicios",
      link: "/catalogue",
    },
    {
      name: "Sobre nosotros",
      link: "/about",
    }
  ];

  const linksCollapse = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "servicios",
      link: "/catalogue",
    },
    {
      name: "Sobre nosotros",
      link: "/about",
    }
  ];

  return (
    <>
      <Navbar className='navBar' isBordered>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
          <img className='navBar_logo' src='../../../../public/assets/vite.svg' alt='Logo' />
        <Navbar.Content className='navBar_layer' hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link' to={item.link} key={item.name} >{item.name}</Link>
          ))}
        </Navbar.Content>
        <Navbar.Collapse className='collapse'>
          {linksCollapse.map((item) => (
            <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;