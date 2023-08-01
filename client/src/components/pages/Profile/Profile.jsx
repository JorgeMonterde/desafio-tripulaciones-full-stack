import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { BsFillCaretRightFill, BsFillCaretLeftFill, BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsAspectRatio, BsFillArrowDownSquareFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import LinesChart from "./LinesChart/LinesChart";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import StepBar from '../../baseComponents/StepBar/StepBar';
import Collapse from '../../baseComponents/Collapse/Collapse';
import axios from "axios";

// const steps = [
//   {
//     label: 'Datos',
//     step: 1,
//     document: '../../../../public/assets/pdfDocs/Paso_1_Datos.pdf',
//   },
//   {
//     label: 'Auditoría',
//     step: 2,
//     document: docAuditoria,
//   },
//   {
//     label: 'Propuesta',
//     step: 3,
//     document: '',
//   },
//   {
//     label: 'Proyecto',
//     step: 4,
//     document: '',
//   },
//   {
//     label: 'Hoy',
//     step: 5,
//     document: '',
//   },
// ]

// const handlepdfDoc = () => 

const Profile = () => {
  const [showFormIncident, setshowFormIncident] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [showGraphic, setshowGraphic] = useState(true);
  const [pageAmount, setPageAmount] = useState(null);
  const [pdfName, setPpdfName] = useState('');
  const [clientInfo, setClientInfo] = useState({});
  const [buildingInfo, setBuildingInfo] = useState({});
  const [city, setCity] = useState("");
  const onDocumentLoadSuccess = ({ pageAmount: number }) => {
    setPageAmount(pageAmount);
    console.log("pageAmount", pageAmount);
  }

  const handlePrevPage = () => setPageNumber(pageNumber - 1);

  const handleNextPage = () => (pageNumber + 1);

  const handleClosePdf = () => setshowGraphic(true);


  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

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

  return (
    <>
      <section className='profile_header'>
        <img className='profile_avatar' src='../../../../public/assets/energyImg.avif'/>
        <article className='profile_headerText'>
          <h2 className='TitleM'>Nombre de la comunidad: {buildingInfo.name_of_community}</h2>
          <p>Id de usuario: {clientInfo.client_id}</p>
          <p>Dirección: {buildingInfo.address}</p>
          </article>
      </section>

      <LinesChart city={buildingInfo.city}/>


      <section className='profile_progressBar'>
        <StepBar setPpdfName={setPpdfName}/>

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

      {showGraphic  
      ?<section className='profile_temperature'>
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
      :<section className='pdf_report'>
        
        <button className='close_btn' onClick={handleClosePdf}><BsXLg/></button>
        <Document file={`../../../../public/assets/pdfDocs/Paso_${pdfName}.pdf`}  onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <section className='pdf_btns'>
          {pageNumber > 1 &&  <button className='arrow_btn prev_page' onClick={handlePrevPage}><BsFillCaretLeftFill/></button>}
          <p className='pdf_pages'>Página {pageNumber} de {pageAmount}</p>
          {pageNumber < pageAmount && <button className='arrow_btn next_page' onClick={handleNextPage}><BsFillCaretRightFill/></button>}
        </section>
      </section>
      }


      <section className='profile_incidents'>
        <article className='incidents_header'>
          <h2 className='TitleM'>¿Algo no va bien?</h2>
          <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </article>


        <section className='incidents_content'>
          <Collapse/>
        </section>
      </section>
    </>
  );
};


export default Profile;