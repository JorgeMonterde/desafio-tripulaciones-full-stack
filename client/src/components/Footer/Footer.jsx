
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
 

  return (
    <footer className='footer'>
      <ul className='footer_certificates'>
        <li><img className='seal' src='../../../public/assets/Footer/image3.webp' alt='Sello Aenor'/></li>
        <li><img className='seal' src='../../../public/assets/Footer/image2.webp' alt='Sello Cradle to cradle'/></li>
        <li><img className='seal' src='../../../public/assets/Footer/image1.webp' alt='Sello Faertrade'/></li>
      </ul>
      <ul className='footer_links'>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'>Avisos legales</a></li>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'>Política de privacidad</a></li>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'>Política de cookies</a></li>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'>FAQs</a></li>
      </ul>
      <ul className='footer_RRSS'>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiFillFacebook  className='icon'/></a></li>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiOutlineInstagram className='icon' /></a></li>
        <li><a href='https://github.com/desafioteam1/full-stack/tree/develop'><AiOutlineTwitter className='icon' /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;