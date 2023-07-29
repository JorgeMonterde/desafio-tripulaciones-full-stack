import { Link } from 'react-router-dom';
import TextBand from '../../baseComponents/TextBand/TextBand';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';

const Landing = () => {
  
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>

      <article className='claim_container'>
        <p className='TitleXL'>Aislamiento Sostenible para tu comunidad</p>
        <p className='bodyXXLRegular'>Integra las mejores soluciones de ahorro energético en tu hogar sin necesidad de obras.</p>
        <button className='claimCta_btn bodyXXLBold'>Quiero saber más</button>
      </article>

      <TextBand className="text_band" text="Title XL * Beneficios * Title XL * Beneficios" />
      
      <section className='cards_container'>
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Cuidado de la estética.</h1>
            <p className='card_text'> Cuidamos del factor energético pero también factor estético con soluciones paisajísticas modernas y fácilmente integrables en cualquier tipo de construcción.</p>
          </section>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
        </article>

        <article className='card_img_text'>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
          <section className='case_content'>
            <h1 className='TitleM'>Materiales ecosostenibles. </h1>
            <p className='card_text'> Proporcionamos las últimas tecnologías ecosostenibles con materiales que ayudan a reducir el gasto energético de los edificios a la vez que aportan un toque verde y moderno.</p>
          </section>
        </article>
      
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>Compromiso a largo plazo.</h1>
            <p className='card_text'>No creas que nuestra labor termina cuando instalamos nuestros productos. Seguiremos contigo a lo largo del tiempo asegurándonos de ofrecerte siempre el mejor servicio post-venta.</p>
          </section>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
        </article>
      </section>
    </>
  )
};
export default Landing;