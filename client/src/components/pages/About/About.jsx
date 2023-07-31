import { BsLinkedin } from "react-icons/bs";
import { team } from '../../../../team';
import TextMarquee from "../../baseComponents/TextMarquee/TextMarquee";

const About = () => {
  const passElements =  () => {
    return <>
      <h3>Mariangélica</h3>
      <h3>Jorge</h3>
      <h3>Pablo</h3>
      <h3>Annita</h3>
      <h3>Clara</h3>
      <h3>Romina</h3>
      <h3>Judit</h3>
      <h3>Alberto</h3>
      <h3>Braulio</h3>
      <h3>Christian</h3>
      <h3>Claudio</h3>
      <h3>Adrian</h3>
      <h3>Yvan</h3>
    </>
  }

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

      <TextMarquee elements={passElements()}/>

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