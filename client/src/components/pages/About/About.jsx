import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>Nosotros</h1>
      <Link to="/contact"><button className='contact_btn'><img src='../../../../public/assets/vite.svg'/></button></Link>
    </>
  );
};

export default About;