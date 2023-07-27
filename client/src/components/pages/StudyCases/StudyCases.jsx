import { Link } from 'react-router-dom';

const StudyCases = () => {
  return (
    <>
      <h1>Casos de éxito</h1>
      <Link to="/contact"><button className='contact_btn'><img src='../../../../public/assets/vite.svg'/></button></Link>
    </>
  );
};

export default StudyCases;