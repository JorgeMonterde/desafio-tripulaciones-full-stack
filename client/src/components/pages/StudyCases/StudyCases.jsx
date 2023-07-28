import { Link } from 'react-router-dom';

const StudyCases = () => {
  return (
    <>
      <Link to="/contact"><button className='contact_btn'><img src='../../../../public/assets/vite.svg'/></button></Link>
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

        <h1 className='text_band'>Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL ·</h1>
    </>
  );
};

export default StudyCases;