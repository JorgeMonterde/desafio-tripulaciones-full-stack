import {useState} from "react";
import Form from './Form/Form';
import Modal from "../../baseComponents/Modal/Modal";
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  const changeModalInfo = (title, content) => {
    setModalInfo({"title": title, "content": content});
  };
  const isVisible = {visible, changeVisibleState};

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


  return <>
    <article className='form_header'>
      <h1 className='TitleM'>Me interesa</h1>
      <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    </article>

    <Form isVisible={isVisible} changeModalInfo={changeModalInfo}/>
    
    <TextMarquee elements={passElements()}/>

    <section className='contact_header'>
        <section className='header_question'>
          <p className='TitleM'>¿Tienes alguna pregunta?</p>
          <p className='bodyXLRegular'>Puedes contactar con nosotros por teléfono de lunes a viernes de 9:00 a 20:00 o las 24 horas a través de correo electrónico.</p>
        </section>

        <section className='contact_us'>
          <section className='contact_data'>
            <p className='TitleXS'>Llámanos al</p>
            <p className='TitleM'>600 700 800</p>
          </section>
          <section className='contact_data'>
            <p className='TitleXS'>O escríbenos a</p>
            <p className='TitleM'>info@solsiete.com</p>
          </section>
        </section>
      </section>

      <Modal isVisible={isVisible} title={modalInfo.title} content={modalInfo.content}/>
  </>;
};

export default Contact;