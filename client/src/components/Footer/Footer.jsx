import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='footer'>
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