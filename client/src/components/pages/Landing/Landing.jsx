import { Link } from 'react-router-dom';
import TextBand from '../../baseComponents/TextBand/TextBand';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';

const Landing = () => {
  
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>

      <article className='claim_container'>
        <p className='TitleXL'>Claim</p>
        <p className='bodyXXLRegular'>subtitle</p>
        <button className='claimCta_btn bodyXXLBold'>CTA</button>
      </article>

      <TextBand className="text_band" text="Title XL * Beneficios * Title XL * Beneficios" />
      
      <section className='cards_container'>
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
            <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
        </article>

        <article className='card_img_text'>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
          <section className='case_content'>
            <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
            <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
        </article>
      
        <article className='card_img_text'>
          <section className='case_content'>
            <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
            <p className='card_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </section>
          <img className='card_img' src='../../../../public/assets/energyImg.avif'  alt='Card background'/>
        </article>
      </section>
    </>
  )
};
export default Landing;