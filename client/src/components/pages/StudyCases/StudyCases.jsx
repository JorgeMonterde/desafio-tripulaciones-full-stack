import { Link } from 'react-router-dom';
import TextBand from '../../baseComponents/TextBand/TextBand';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

const StudyCases = () => {
  const passElements =  () => {
    return (
      <>
        {/* <h3>Ahorro</h3>
        <h3>Silencio</h3>
        <h3>Durabilidad</h3>
        <h3>Confort</h3>
        <h3>Sostenible</h3> */}
        <h3>Title XL</h3>
        <img className="marquee-star" src={Star} />
        <h3>Beneficios</h3>
        <img className="marquee-star" src={Star} />
        <h3>Title XL</h3>
        <img className="marquee-star" src={Star} />
        <h3>Beneficios</h3>
        <img className="marquee-star" src={Star} />
      </>
    )
  }
  
  
  
  
  
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>
      <TextMarquee elements={passElements()}/>
      <section className='study_cases'>
          <article className='case'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section className='case_content'>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>

          <article className='case'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section className='case_content'>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>
        </section>

        {/* <TextBand  className="text_band" text="Title XL * Beneficios * Title XL * Beneficios"  /> */}
    </>
  );
};

export default StudyCases;