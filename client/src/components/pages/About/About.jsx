import { BsLinkedin } from "react-icons/bs";
import { team } from '../../../../team';
import TextMarquee from "../../baseComponents/TextMarquee/TextMarquee";
import Star from "../../../../public/assets/Star 2.png";


const About = () => {
  const passElements =  () => {
    return <>
      <h3>Mariangélica</h3>
      <img className="marquee-star" src={Star} />
      <h3>Jorge</h3>
      <img className="marquee-star" src={Star} />
      <h3>Pablo</h3>
      <img className="marquee-star" src={Star} />
      <h3>Annita</h3>
      <img className="marquee-star" src={Star} />
      <h3>Clara</h3>
      <img className="marquee-star" src={Star} />
      <h3>Romina</h3>
      <img className="marquee-star" src={Star} />
      <h3>Judit</h3>
      <img className="marquee-star" src={Star} />
      <h3>Alberto</h3>
      <img className="marquee-star" src={Star} />
      <h3>Braulio</h3>
      <img className="marquee-star" src={Star} />
      <h3>Christian</h3>
      <img className="marquee-star" src={Star} />
      <h3>Claudio</h3>
      <img className="marquee-star" src={Star} />
      <h3>Adrian</h3>
      <img className="marquee-star" src={Star} />
      <h3>Yvan</h3>
      <img className="marquee-star" src={Star} />
    </>
  }

  return (
    <>
      <section className='about'>
        <p className='bodyLRegular'>El corazón de nuestra empresa es un equipo multidisciplinar altamente cualificado formado por profesionales que te ofrecerán el mejor servicio y soluciones ecosostenibles para tu comunidad.</p>
        <section className='about_values'>
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

      <TextMarquee elements={passElements()}/>

      <article className='fleet'>
            <h1 className='TitleS'>Contamos con nuestro propio equipo</h1>
          <section className='flote_content'>
            <p className='bodyMRegular'>Nos hacemos cargo de todo el proceso de principio a fin para que tú no tengas que preocuparte por nada.</p>
            <img src='../../../../public/assets/About/fleet.jpg'/>
          </section>
        </article>
    </>
  );
};

export default About;