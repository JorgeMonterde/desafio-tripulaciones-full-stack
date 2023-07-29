import Form from './Form/Form';
import TextBand from '../../../components/baseComponents/TextBand/TextBand';
const Contact = () => {
  return <>
    <article className='form_header'>
        <h1 className='TitleM'>Me interesa</h1>
        <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
      </article>

    <Form />
    
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
  </>;
};

export default Contact;