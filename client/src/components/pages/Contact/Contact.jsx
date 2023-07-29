import {useState} from "react";
import Form from './Form/Form';
import TextBand from '../../../components/baseComponents/TextBand/TextBand';
import Modal from "../../baseComponents/Modal/Modal";

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


  return <>
    <article className='form_header'>
      <h1 className='TitleM'>Me interesa</h1>
      <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    </article>

    <Form isVisible={isVisible} changeModalInfo={changeModalInfo}/>
    
    <TextBand className='text_band' text='Title XL * Beneficios * Title XL * Beneficios'/>

    <section className='contact_header'>
        <section className='header_question'>
          <p className='TitleM'>¿Tienes alguna pregunta?</p>
          <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </section>

        <section className='contact_us'>
          <section>
            <p className='TitleXS'>Llámanos al</p>
            <p className='TitleM'>xxx.xx.xx.xx</p>
          </section>
          <section>
            <p className='TitleXS'>O escríbenos a</p>
            <p className='TitleM'>abc@abc.es</p>
          </section>
        </section>
      </section>

      <Modal isVisible={isVisible} title={modalInfo.title} content={modalInfo.content}/>
  </>;
};

export default Contact;