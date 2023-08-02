import { Link } from 'react-router-dom';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';
import Chatbot from '../../baseComponents/Chatbot/Chatbot';
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

const Landing = () => {

  const passElements =  () => {
    return (
      <>
        <h3 className='TitleXL'>Ahorro</h3>
        <img className="marquee-star" src={Star} />
        <h3 className='TitleXL'>Silencio</h3>
        <img className="marquee-star" src={Star} />
        <h3 className='TitleXL'>Durabilidad</h3>
        <img className="marquee-star" src={Star} />
        <h3 className='TitleXL'>Confort</h3>
        <img className="marquee-star" src={Star} />
      </>
    )
  }
  
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>

      <article className='claim_container'>
        <p className='TitleS TitleL TitleXL TitleXXL'>Transformando comunidades</p>
        <p className='bodyMRegular bodyXLRegular bodyXXLRegular'>Creamos soluciones energéticas sostenibles</p>
        <Link to="/contact"><button className='claimCta_btn hidden'>Quiero saber más</button></Link>
      </article>

      <TextMarquee className='text_band' elements={passElements()}/>
      
      <section className='cards_container'>
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Cuidado de la estética</h1>
            <p className='card_text'>Cuidamos del factor energético pero también factor estético con soluciones paisajísticas modernas y fácilmente integrables en cualquier tipo de construcción</p>
          </section>
          <img className='card_img' src='../../../../public/assets/Landing/landingEstética.webp'  alt='imagen de fondo'/>
        </article>

        <article className='card_img_text card_img_reverse'>
          <section className='case_content'>
            <h1 className='TitleM'>Materiales ecosostenibles. </h1>
            <p className='card_text'> Proporcionamos las últimas tecnologías ecosostenibles con materiales que ayudan a reducir el gasto energético de los edificios a la vez que aportan un toque verde y moderno.</p>
          </section>
          <img className='card_img' src='../../../../public/assets/Landing/landingMateriales.webp'  alt='Card background'/>
        </article>
      
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Compromiso a largo plazo.</h1>
            <p className='card_text'>No creas que nuestra labor termina cuando instalamos nuestros productos. Seguiremos contigo a lo largo del tiempo asegurándonos de ofrecerte siempre el mejor servicio post-venta.</p>
          </section>
          <img className='card_img' src='../../../../public/assets/Landing/landingCompromiso.webp'  alt='Card background'/>
        </article>
      </section>

      <button className='cta_btn'>Contacta</button>

      <Chatbot/>
    </>
  )
};
export default Landing;