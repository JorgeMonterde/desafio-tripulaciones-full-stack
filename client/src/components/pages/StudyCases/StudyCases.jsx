import { Link } from 'react-router-dom';
import TextBand from '../../baseComponents/TextBand/TextBand';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';

const StudyCases = () => {
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>
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

        <TextBand  className="text_band" text="Title XL * Beneficios * Title XL * Beneficios"  />
    </>
  );
};

export default StudyCases;