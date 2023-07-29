import { Link } from 'react-router-dom';
import { BsAspectRatio, BsFillArrowDownSquareFill } from "react-icons/bs";
import ContactBtn from '../../baseComponents/ContactBtn/ContactBtn';

// const steps = [
//   {
//     label: 'Datos',
//     step: 1,
//   },
//   {
//     label: 'Auditoría',
//     step: 2,
//   },
//   {
//     label: 'Propuesta',
//     step: 3,
//   },
//   {
//     label: 'Proyecto',
//     step: 4,
//   },
//   {
//     label: 'Hoy',
//     step: 5,
//   },
// ]

const Profile = () => {
  return (
    <>
      <Link to="/contact"><ContactBtn/></Link>
      <section className='profile_header'>
        <img className='profile_avatar' src='../../../../public/assets/energyImg.avif'/>
        <article className='profile_headerText'>
          <h2 className='TitleM'>Nombre de la comunidad</h2>
          <p>Id de usuario</p>
          <p>Dirección</p>
          </article>
      </section>

      <section className='profile_progressBar'>
        <section className='step-bar'>
          <div>
            <p className='circle TitleM'>1</p><span></span>
          </div>
          <div></div>
          <p className='circle TitleM'>2</p><span></span>
          <p className='circle TitleM'>3</p><span></span>
          <p className='circle TitleM'>4</p><span></span>
          <p className='circle TitleM'>5</p>
        </section>

        <ul className='legend'>
          <li className='legend_title'>Leyenda:</li>
          <li>
            <span className='legend_color done'></span>
            Completado  
          </li>
          <li>
            <span className='legend_color inProcess'></span>
            En proceso  
          </li>
          <li>
            <span className='legend_color docRequired'></span>
            A la espera de documentación  
          </li>
          <li>
            <span className='legend_color notInit'></span>
            No iniciado  
          </li>
        </ul>
      </section>

      <section className='profile_temperature'>
        <article className='temp_header'>
          <h2 className='TitleM'>Estas son tus lecturas</h2>
          <p className='bodyXXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </article>
        <section className='profile_temp'>
          <section className='temp_user'>
            <article className='temp_meassure'>
              <p className='temp_label'>Temperatura exterior</p>
              <div className='temp_box temp_exterior'>
                <p className='temp_text'>36ºC</p>
              </div>
            </article>
            <article className='temp_meassure'>
              <p className='temp_label'>Temperatura interior</p>
              <div className='temp_box temp_interior'>
                <p className='temp_text'>29ºC</p>
              </div>
            </article>
          </section>

          <section className='temp_graphic'>
            <img src='../../../../public/assets/Chart.png' alt='gráfica de temperaturas'/>
          </section>
          
          <section className='temp_savedTrees'>
            <div className='temp_box '>
              <p className='temp_text'>4500</p>
            </div>
            <p>kg de CO2 evitado</p>
            <img src='../../../../public/assets/Tree.png' alt='Icono de arbol'/>
            <p className='temp_text'>29ºC</p>
            <p>Temperatura interior</p>
          
          </section>
        </section>
      </section>

      <section className='profile_incidents'>
        <article className='incidents_header'>
          <h2 className='TitleM'>¿Algo no va bien?</h2>
          <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </article>

        <section className='incidents_content'>
          <p className='bodyXLBold'>Notificar incidencia <BsFillArrowDownSquareFill/></p>
          <form className='incidens_form'>
            <input className='bodyLRegular' type='text' placeholder='Insertar texto incidencia'></input>
            <button className='TitleXS' type='submit'>Enviar</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Profile;