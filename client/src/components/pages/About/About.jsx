<<<<<<< HEAD
const About = () => {
  return <div>About</div>;
};

export default About;
=======
import { BsLinkedin } from "react-icons/bs";
import { team } from '../../../../team';

const About = () => {
  return (
    <>
      <section className='about'>
        <article className='about_us'>
          <h1 className='TitleM'>MISIÓN</h1>
          <p className='bodyLRegular'>busca potenciar el ahorro energético mediante un servicio integral de análisis, instalación y seguimiento para nuestros clientes. Nuestra oferta de soluciones ecosostenibles son aptas para muchos tipos diferentes de comunidades.</p>
        </article>

        <article className='about_us'>
          <h1 className='TitleM'>VISIÓN</h1>
          <p className='bodyLRegular'>Nos esforzamos por ser líderes en el sector del ahorro energético y una compañía de referencia que lucha por mejorar la huella de carbono de las personas en el ecosistema.</p>
        </article>

        <article className='about_us'>
          <h1 className='TitleM'>VALORES</h1>
          <p className='bodyLRegular'>Seguridad, Comfort, Cuidado del Medioambiente, Compromiso y Cuidado al Detalle.</p>
        </article>
      </section>

      <h1 className='text_band'>* Nuestro equipo * Title M * Nuestro equipo * Title M * Nuestro equipo * Title M * Nuestro </h1>

      <section className='team'>
        {team?.length > 0 ? team.map(member =>  {
          return <article className='member' key={member.rrss}>
                  <img className='member_img' src={member.img}/>
                  <section className='member_data'>
                    <p className='member_name'>{member.name}</p>
                    <p className='member_role bodyXLRegular'>{member.role}</p>
                    <a href={member.rrss}>
                      <section className='member_rrss'>
                        <p className='member_profile bodyXLRegular'>Sobre mí</p> 
                        <BsLinkedin className='icon'/>
                      </section>
                    </a>
                  </section>
                </article>
        }): null}
      </section>
    </>
  );
};

export default About;
>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
