import { Link } from 'react-router-dom';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

const Catalogue = () => {
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

  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>


      <section className='sevices_header'>
        <article className='service'>
          <h2 className='service_title'>Estudio Energético</h2>
          <section className='service_content'>
            <img className='service_img' src='../../../../public/assets/Catalogue/ant-design_audit-outlined.png'/>
            <p className='service_desc'>Realizamos una completa auditoría de las instalaciones para asegurarnos de que podremos ofrecerte el mejor ahorro energético con nuestros servicios de aislamiento ecosostenible.
            Con este estudio podremos determina qué materiales son los ideales para solucionar el problema de gestión térmica de tu edificio y de las zonas comunes.
            Establecemos también la previsión temporal del proyecto y un informe detallado de cómo afectará al ahorro energético de tu comunidad en comparación con la situación previa.</p>
          </section>
        </article>

        <article className='service'>
          <h1 className='servise_title'>Soluciones Ecosostenibles</h1>
          <section className='service_content'>
            <img className='service_img' src='../../../../public/assets/Catalogue/SolucionesEcosostenibles.jpg'/>
            <p className='servise_desc bodyLRegular bodyXXLRegular'>Somos la única empresa en el mercado que puede ofrecerte hasta 4 tipos diferentes de soluciones según las necesidades que detectemos en nuestro estudio. Descubre todo lo que SOL7 puede hacer por ti:</p>
          </section>

          <article className='service_section'>
            <h1 className='solution_title  TitleM'>Soluciones GREEN</h1>
            <section className='service_content'>
              <p className='servise_desc bodyMRegular bodyXXLRegular'>El factor estético es tan importante para nosotros como lo es para ti, por eso ponernos a tu disposición soluciones ecosostenibles de gran calidad paisajística.</p>
            </section>
          </article>
        </article>
      </section>

      <section className='sevices_benefits'>
        <section className='beneficts'>
          <article className='benefict'>
            <section className='benefict_content'>
              <h1 className='benefict_title TitleXS '>Cubiertas ajardinadas</h1>
              <p className='benefict_desc bodyXLRegular'>Recubre los tejados del edificio con una preciosa composición vegetal compuesta de plantas que resisten bien las temperaturas extremas. Con un sistema de riego de bajo consumo integrado, esta solución no sólo mantendrá las temperaturas estables en el interior, si no que además, aportará un toque verde y colorido al exterior.</p>
            </section>
            <img src='../../../../public/assets/Catalogue/cubiertasAjardinadas.jpg'/>
          </article>

          <article className='benefict'>
            <section className='benefict_content'>
              <h1 className='benefict_title'>Toldos vegetales</h1>
              <p className='benefict_desc'>¿Las zonas comunes de tu comunidad son intransitables a ciertas horas del día? ¡No es un problema! Instalamos toldos con vegetación para mantener las temperaturas a raya en las peores horas solares. Nuestro sistema de riego integrado mantiene los toldos frescos y te permite moverte libremente por una zona de sombra segura y… ¡muy bonita!</p>
            </section>
            <img src='../../../../public/assets/Catalogue/Toldosvegetales.jpg'/>
          </article>

          <article className='service_eco'>
            <h1 className='solution_title TitleM'>Soluciones ECO</h1>
            <section className='service_content'>
              <p className='servise_desc bodyLRegular bodyXXLRegular'>¿Estás buscando soluciones sostenibles de ahorro energético con un presupuesto más ajustado? Nuestras soluciones ECO son perfectas para cualquier tipo de instalaciones.</p>
            </section>
          </article>

          <article className='benefict'>
            <section className='benefict_content'>
              <h1 className='benefict_title '>Pintura térmica</h1>
              <p className='benefict_desc bodyXLRegular'>Esta solución permitirá dar una capa más de aislamiento a las paredes de tu edificio o cualquier otra superficie que forme parte de las zonas comunes de tu comunidad para combatir los efectos del calor en verano y del frío en invierno. Consigue hasta un 30% de ahorro energético con la pintura térmica blanca o de colores claros para proyectar los rayos del sol y mantener una temperatura más estable en el interior.</p>
            </section>
            <img src='../../../../public/assets/Catalogue/Pinturatermica.jpg'/>
          </article>

          <article className='benefict'>
            <section className='benefict_content'>
              <h1 className='benefict_title '>Aislamiento vegetal de corcho</h1>
              <p className='benefict_desc bodyXLRegular'>El corcho natural tiene unas excelentes propiedades de aislamiento tanto térmico como acústico. Fácil de instalar, estético y con una eficacia comprobada para contrarrestar los efectos de las olas de calor y el ruido exterior notablemente.</p>
            </section>
            <img src='../../../../public/assets/Catalogue/Aislamientovegetaldecorcho.jpg'/>
          </article>
        </section>
      </section>


      <section className='sevice_track'>
        <article className='service'>
            <h2 className='track_Title'>Seguimiento activo</h2>
            <section className='service_content'>
              <img className='service_img' src='../../../../public/assets/Catalogue/seguimientoACtico.png'/>
              <p className='track_desc bodyXXLRegular'>Parte de nuestro servicio integral de mejora para la climatización de edificios vecinales y zonas comunes es la instalación de un sistema de termómetros inteligentes interconectados que recopilarán datos en tiempo real para ofrecerte la mejor lectura de la temperatura interior y exterior.
              Mantendremos a la comunidad informada de las variaciones de temperatura para que estén prevenidos frente a las olas de calor.</p>
            </section>
          </article>
      </section>

    <TextMarquee className='text_band' elements={passElements()}/>

    <section className='beneficts_list'>
        <h2 className='title_outLine'>Beneficios de SOL7 </h2>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/ph_chart-line-down-light.svg'/>
        <section >
          <h2 className='benefict_title  '>Reducción del consumo energético</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/tabler_pig-money.svg'/>
        <section >
          <h2 className='benefict_title  '>Ahorro de costos</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/tabler_health-recognition.svg'/>
        <section>
          <h2 className='benefict_title  '>Mejora del confort interior</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/fluent_people-community-48-regular.svg'/>
        <section>
          <h2 className='benefict_title  '>Mayor confort y bienestar en las zonas comunes</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/fluent_speaker-1-24-regular.svg'/>
        <section>
          <h2 className='benefict_title  '>Reducción de ruido</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/mdi_molecule-co2.svg'/>
        <section>
          <h2 className='benefict_title  '>Reducción de gases de efecto invernadero</h2>
        </section>
      </article>
      
      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/basil_sand-watch-outline.svg'/>
        <section>
          <h2 className='benefict_title  '>Mayor durabilidad de los edificios y las instalaciones</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/mdi_scheduled-maintenance.svg'/>
        <section>
          <h2 className='benefict_title  '>Menor necesidad de mantenimiento y reparaciones</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/fluent-emoji-high-contrast_money-bag.svg'/>
        <section>
          <h2 className='benefict_title  '>Aumento del valor de las propiedades</h2>
        </section>
      </article>

      <article className='benefict_content'>
        <img className='service_img' src='../../../../public/assets/Catalogue/streamline_nature-ecology-potted-tree-2-tree-plant-pot.svg'/>
        <section>
          <h2 className='benefict_title  '>Contribución a la protección del medio ambiente</h2>
        </section>
      </article>
    </section>

    <button className='cta_btn' type="submit">Enviar</button>
    </>
  );
};

export default Catalogue;
