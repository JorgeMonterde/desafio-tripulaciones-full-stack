

const ContactBtn = () => {
  window.addEventListener('scroll', ()=> {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight))
  })

  return (
    <>
      <img className='contact_btn' src='../../../../public/assets/Button_CTA_Fix.png'  alt='botón de contacto'/>
    </>
  );
};

export default ContactBtn;