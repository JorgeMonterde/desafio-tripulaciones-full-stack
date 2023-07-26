import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import Button from '../../baseComponents/Button/Button';

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
        {/* <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand> */}
          <img className='navBar_logo' src='../../../../public/assets/vite.svg' alt='Logo' />
        <Navbar.Content className='navBar_layer' hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link' to={item.link} key={item.name} >{item.name}</Link>
          ))}
          <Link to="login"><Button text="login"/></Link>
        </Navbar.Content>
        {/* <Navbar.Collapse className='collapse'>
          {linksCollapse.map((item) => (
            <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}
        </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default NavBar;