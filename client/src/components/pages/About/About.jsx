import { BsLinkedin } from "react-icons/bs";
import { team } from '../../../../team';

const About = () => {
  return (
    <>
      <section className='about'>
        <article className='about_us'>
          <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
          <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </article>

        <article className='about_us'>
          <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
          <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </article>

        <article className='about_us'>
          <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
          <p className='bodyLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
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