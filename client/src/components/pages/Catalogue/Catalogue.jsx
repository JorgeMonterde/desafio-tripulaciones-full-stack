import { Link } from 'react-router-dom';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';

const Catalogue = () => {
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>

      <section className='sevices_header'>
        <article className='service'>
          <h2 className='TitleM'>Title/M</h2>
          <section className='service_content'>
            <img className='service_img' src=''/>
            <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
        </article>

        <article className='service'>
          <h1 className='TitleM'>Title/M</h1>
          <section className='service_content'>
            <img className='service_img' src=''/>
            <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
        </article>

        <article className='service'>
          <h1 className='TitleM'>Title/M</h1>
          <section className='service_content'>
            <img className='service_img' src=''/>
            <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
        </article>
      </section>

      <section className='sevices_benefits'>
        <h2 className='TitleM'>Title/M</h2>
        
        <section className='beneficts'>
          <article className='benefict'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section className='benefict_content'>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>

          <article className='benefict'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>

          <article className='benefict'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>

          <article className='benefict'>
            <img src='../../../../public/assets/energyImg.avif'/>
            <section>
              <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
              <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </section>
          </article>
        </section>
      </section>
    </>
  );
};

export default Catalogue;
