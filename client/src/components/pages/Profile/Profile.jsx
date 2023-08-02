import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { BsChevronRight, BsChevronLeft} from "react-icons/bs";
import LinesChart from "./LinesChart/LinesChart";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import StepBar from '../../baseComponents/StepBar/StepBar';
import Collapse from '../../baseComponents/Collapse/Collapse';
import axios from "axios";



const steps = [
  {
    name: 'Datos de la comunidad',
    number: 1,
    document: '../../../../public/assets/Profile/pdfDocs/Paso_1_Datos.pdf',
  },
  {
    name: 'Resultado de la auditoría',
    number: 2,
    document: '../../../../public/assets/Profile/pdfDocs/Paso_2_Auditoria.pdf',
  },
  {
    name: 'Propuesta y presupuesto',
    number: 3,
    document: '',
  },
  {
    name: 'Ejecución del proyecto',
    number: 4,
    document: '',
  },
  {
    name: 'Seguimiento',
    number: 5,
    document: '',
  },
];


const Profile = () => {
  const [pageAmount, setPageAmount] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showGraphic, setshowGraphic] = useState(true);
  const [pdfName, setPpdfName] = useState('');
  const [clientInfo, setClientInfo] = useState({});
  const [buildingInfo, setBuildingInfo] = useState({});
  const [city, setCity] = useState("");

  const onDocumentLoadSuccess = ({_pdfInfo: {numPages}}) => {
    setPageAmount(numPages);
  }

  const handlePrevPage = () => setPageNumber(pageNumber - 1);
  const handleNextPage = () => setPageNumber(pageNumber + 1);
  const handleClosePdf = () => setshowGraphic(true);
  
  const clickHandlerGenerator = (pdf) => () => {
    setshowGraphic(false);
    setPpdfName(pdf)
  };


  useEffect(() => {
    const getClientAndBuildingInfo = async() => {
      const clientResponse = await axios.get("/api/clients/client", { withCredentials: true });
      setClientInfo(clientResponse.data.data);
      
      
      const buildingResponse = await axios.get("/api/buildings/building", { withCredentials: true });
      setBuildingInfo(buildingResponse.data.data);
      console.log("info?????", clientResponse, buildingResponse);
      setCity(buildingResponse.data.data.city);
      console.log("city ", buildingResponse.data.data.city);
    };
    getClientAndBuildingInfo();
  }, []);

  const stepBarSteps = steps?.map(step => ({
    name: step.name,
    number: step.number,
    clickHandler: clickHandlerGenerator(step.document),
  }))


  useEffect(() => {
    setPageNumber(1);
  }, [pdfName])
 
  return (
    <>
      <section className='profile_header'>
        <img className='profile_avatar' src='../../../../public/assets/Profile/userPicture.jpg'/>
        <article className='profile_headerText'>
          <h2 className='TitleM'>{buildingInfo.name_of_community}</h2>
          <p className='bodyLRegular'><span className='bold'>Id de usuario: </span>{clientInfo.client_id}</p>
          <p className='bodyLRegular'><span className='bold'>Dirección: </span>{buildingInfo.address}</p>
          </article>
      </section>

      <LinesChart city={buildingInfo.city}/>


      <section className='profile_progressBar'>
        <StepBar steps={stepBarSteps}/>


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


      {showGraphic ? <section className='profile_temperature'>
        <article className='temp_header'>
          <h2 className='TitleM'>Tus lecturas en tiempo real</h2>
          <p className='bodyXXLRegular'>Enn este espacio puedes comprobar en tiempo real la temperatura registrada por los termómetros instalados en tu comunidad, así como el CO2 que habéis conseguido evitar y los árboles que habéis salvado desde que se ejecutó el proyecto:</p>
        </article>
        <section className='profile_temp'>
          <section className='temp_user'>
            <article className='temp_meassure'>
              <p className='temp_label'>Temperatura exterior</p>
              <div className='temp_box temp_exterior'>
                <p className='temp_text'>33ºC</p>
              </div>
            </article>
            <article className='temp_meassure'>
              <p className='temp_label'>Temperatura interior</p>
              <div className='temp_box temp_interior'>
                <p className='temp_text'>28,3ºC</p>
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
            <p>Árboles salvados</p>
         
          </section>
        </section>
      </section>
      :(pdfName && <section className='pdf_report'>
        <button className='cta_btn' onClick={handleClosePdf}>Cerrar</button>
        <Document file={pdfName}  onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <section className='pdf_btns'>
          <button className='arrow_left prev_page' disabled={pageNumber < 2} onClick={handlePrevPage}><BsChevronLeft/></button>
          <p className='pdf_pages'>Página {pageNumber} de {pageAmount}</p>
          <button className='arrow_rigth next_page' disabled={pageNumber >= pageAmount} onClick={handleNextPage}><BsChevronRight/></button>
        </section>
      </section>)
      }

      <section className='profile_incidents'>
        <article className='incidents_header'>
          <h2 className='TitleM'>¿Algo no va bien?</h2>
          <p className='bodyXLRegular'>Pregúntale a nuestro chatbot, si tu problema no se soluciona, rellena el formulario inferior.
¿No puedes esperar? Puedes llamar  al (+34) 919 01 72 57 de lunes a viernes de 9:00 a 20:00</p>
        </article>

        <section className='incidents_content'>
          <Collapse/>
        </section>
      </section>
    </>
  );
};

export default Profile;