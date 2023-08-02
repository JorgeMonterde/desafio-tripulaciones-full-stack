import { Link } from 'react-router-dom';
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

const StudyCases = () => {
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
    
      <section className='study_cases'>
        <article className='case'>
            <h1 className='TitleL'>Urbanización Pergolesi · Málaga</h1>
          <section className='case_content'>
            <p className='bodyXLRegular'>Los vecinos de la comunidad de Calle Pergolesi en Málaga buscaban darle un toque discreto a su edificio que hiciera las instalaciones más eficientes en cuanto al control de las temperaturas y el ruido. Realizamos recubrimiento de 1500m2 con paneles de corcho aislante. El resultado fue una reducción de hasta un 10% de la temperatura dentro de las viviendas y en las zonas comunes de tránsito.</p>
            <img src='../../../../public/assets/StudyCases/malaga.png'/>
          </section>
        </article>

        <article className='case'>
            <h1 className='TitleL_center'>Comunidad de vecinos Vistapencos · Linares</h1>
          <section className='case_content'>
            <p className='bodyXLRegular'>En Jaén, una de las zonas más afectadas por las olas de calor en los últimos años, los vecinos de Vistapencos se quejaban de lo intransitable que resultada el camino desde sus casas hasta la zona de los garajes debido al sobrecalentamiento del asfalto. Nuestra solución fue el recubrimiento de la vía con pintura térmica hiperblanca para disminuir el efecto calorífico de los rayos sobre el pavimento. El resultado fue una reducción media de entre 5 y 6 grados en las horas de máximo calor.</p>
            <img src='../../../../public/assets/StudyCases/linares.png'/>
          </section>
        </article>

        <article className='case'>
            <h1 className='TitleL'>Urbanización Ben Cahute · Jávea</h1>
          <section className='case_content'>
            <p className='bodyXLRegular'>La comunidad de Ben Cahute ya era un paraíso, pero los vecinos de esta maravillosa urbanización creían que aún le faltaba algo que hiciera las zonas comunes aún más especiales. Durante las olas de calor y en las horas más calurosas del día en verano, era difícil disfrutar de estas zonas, así que nos pidieron ayuda. Nuestra propuesta fue la instalación de toldos vegetales para ayudar a mantener las temperaturas un poco más bajas.</p>
            <img src='../../../../public/assets/StudyCases/javea.png'/>
          </section>
        </article>

        <article className='case'>
            <h1 className='TitleL_center'>Edificio Malvavisco III · Alcorcón</h1>
          <section className='case_content'>
            <p className='bodyXLRegular'>En el mismo epicentro de Alcorcón se vivieron momentos duros debido al azote de las altas temperaturas durante las olas de calor. Después de mucho investigar, los vecinos del Edificio Malvavisco dieron con la solución perfecta: Sol7. Nuestro estudio reveló que la instalación de una cubierta ajardinada transitable para el edificio ayudaría a mantener las temperaturas estables durante el verano y evitaría el sobrecalentamiento del tejado. El resultado fue una bajada de las temperaturas del 20% con respecto al año anterior en general en el edificio.</p>
            <img src='../../../../public/assets/StudyCases/alcorcon.png'/>
          </section>
        </article>

        </section>

        <TextMarquee elements={passElements()}/>
    </>
  );
};

export default StudyCases;