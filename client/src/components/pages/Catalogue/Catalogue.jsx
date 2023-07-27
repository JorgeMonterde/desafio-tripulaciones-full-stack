import { Link } from 'react-router-dom';

const Catalogue = () => {
  return (
    <>
      <h1>Servicios</h1>
      <Link to="/contact"><button className='contact_btn'><img src='../../../../public/assets/vite.svg'/></button></Link>
    </>
  );
};

export default Catalogue;
