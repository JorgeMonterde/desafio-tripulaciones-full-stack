import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../baseComponents/Modal/Modal";
import TextMarquee from '../../baseComponents/TextMarquee/TextMarquee';
import Star from "../../../../public/assets/Star 2.png";

let inputDefaultValues = {
  // client fields
  first_name: '',
  surname: '',
  email: '',
  telephone_num: "",
  client_position: '',
  password: "",

  // building fields
  address: '',
  postal_code: "", 
  city: '',
  province: '',
  community_type: '',

  cif: "",
  total_area:"",
  communal_areas_area: "",
  housing_area: "",
  number_of_apartments: "",
  year_of_construction: "",
  cadastre_number:"",
  energy_efficiency_certificate:"",
  name_of_community: ""

};


const TechnicalForm = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const {email} = useParams();

  useEffect(() => {
    const getLeadsInfo = async() => {
      const response = await axios.get(`/api/leads/lead/${email}`, { withCredentials: true });

      inputDefaultValues = {...inputDefaultValues, ...response.data.data};
      setInputValue({...inputDefaultValues});

      Object.keys(inputDefaultValues).forEach(key => {
        setValue(key, inputDefaultValues[key]);

      });
    };
    getLeadsInfo();
  }, []);
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const changeVisibleState = () => {
    setVisible(!visible);
  };
  const changeModalInfo = (title, content) => {
    setModalInfo({"title": title, "content": content});
  };
  const isVisible = {visible, changeVisibleState};
  
  const elements = () => {
    return (
      <>
        <h3>Ahorro</h3>
        <img className="marquee-star" src={Star} />
        <h3>Silencio</h3>
        <img className="marquee-star" src={Star} />
        <h3>Durabilidad</h3>
        <img className="marquee-star" src={Star} />
        <h3>Confort</h3>
        <img className="marquee-star" src={Star} />
        <h3>Sostenible</h3>
        <img className="marquee-star" src={Star} />
      </>
    )

  };
        


  //Submit function:
  const onSubmit = async(data) => {
    //1º: validar
    //2º: guardar datos
    //3º: enviar correo con password

    console.log("data???", data);
    //store client info
    const {first_name, surname, email, telephone_num, client_position, password} = data;
    const clientData = {first_name, surname, email, telephone_num, client_position, password};
    
    const clientResponse = await axios.post("/api/clients/client", clientData, { withCredentials: true });
    const {client_id} = clientResponse.data.data;
    console.log("auth response: ",clientResponse);

    //store building info
    const {address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate, name_of_community} = data;
    const buildingData = {client_id, address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate, name_of_community};

    const buildingResponse = await axios.post("/api/buildings/building", buildingData, { withCredentials: true });
    console.log("auth response: ",buildingResponse);

    if(clientResponse.data.success && buildingResponse.data.success){
      // Go to validation: Confirm building specifications are according to validation

        //validation true: set password and redirect to "login"
        const response = await axios.get(`/auth/email/recoverpassword/${email}`, { withCredentials: true });

        //show modal
        changeModalInfo("¡Genial! Parece que este proyecto es APTO.",'Gracias por tomarte el tiempo para respondernos al cuestionario. Te hemos enviado a tu email un correo con las credenciales para entrar en tu nueva cuenta el portal de usuario en "www.solsiete.com". Muy pronto alguien de nuestro equipo se pondrá en contacto contigo para dar los siguientes pasos.');
        changeVisibleState();

        //validation false: message and redirect to "home"
        //show modal
        
      } else {
        // Fail
        console.log("From client: You could not send the form");
        changeModalInfo("¡Ops! Lo sentimos, parece que algo ha fallado. Por favor, inténtalo de nuevo en unos minutos.","Si prefieres contactar con nosotros personalmente, escríbenos un email a info@solsiete.com o llámanos al 600 600 600");
        changeVisibleState();
    }
    console.log(data);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <section className='technicalForm_section'>
        
        <TextMarquee elements={elements()}/>

        <article className='form_header'>
          <h1 className='TitleM'>---Rellene el siguiente formulario para que valoremos su situación---</h1>
          <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </article>

        <form className='form_technical' onSubmit={handleSubmit(onSubmit)}>

          {/* client fields */}

          <section className='fields'>
            <label className='bodyXLBold' htmlFor='name'>Nombre *
              <input className='input bodyLRegular' type="text" id='name' placeholder="Nombre" onChange={handleChange} {...register("first_name", {
                value: inputValue.first_name,
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 20,
                pattern: {value: /^[a-zA-Z ]*$/, message: "Nombre inválido"}
              })} aria-invalid={errors.first_name ? "true" : "false"} />
              {errors.first_name && <p className='text_error' role="alert">{errors.first_name.message}</p>}
            </label>
          
            <label className='bodyXLBold' htmlFor='lastName'>Apellidos *
              <input className='input bodyLRegular' type="text" id='lastName' placeholder="Apellidos" onChange={handleChange} {...register("surname", {
                value: inputValue.surname,
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 30,
                pattern: {value: /^[a-zA-Z ]*$/, message: "Apellidos inválidos"}
              })} aria-invalid={errors.surname ? "true" : "false"} />
              {errors.surname &&  <p className='text_error' role="alert">{errors.surname?.message}</p>}
            </label>
          </section>

          <section className='fields'>    
            <label  className='bodyXLBold' htmlFor='role'>Función *
              <select name="client_position" id='role' {...register("client_position", {required: {
                value: true,
                message: "Campo obligatorio"
              }})}>
                <option value="admin">Administración</option>
                <option value="president">Presidente</option>
                <option value="otro">Otro</option>
              </select>
              {errors.client_position &&  <p className='text_error' role="alert">{errors.client_position?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='communityType'>Tipo de comunidad
              <select name="community_type" id='communityType' {...register("community_type", {required: {
                value: true,
                message: "Campo obligatorio"
              }})}>
                <option value="admin">Un único edificio</option>
                <option value="president">Urbanización</option>
              </select>
            </label>
          </section>
          
          <section className='fields'>
            <label className='bodyXLBold' htmlFor='phone'>Teléfono *
              <input className='input bodyLRegular' type="text" id='phone' placeholder="+34 XXX XX XX XX" onChange={handleChange} {...register("telephone_num", {
                value: inputValue.telephone_num,
                required: "Verificar número de teléfono",
                pattern: {value: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/, message: "Número de teléfono inválido"}
              })} aria-invalid={errors.telephone_num ? "true" : "false"} />
              {errors.telephone_num &&  <p className='text_error' role="alert">{errors.telephone_num?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='email'>Correo electrónico *
              <input className='input bodyLRegular' type="email" id='email' placeholder="xxxxx@xxxxx.xx" onChange={handleChange} {...register("email", {
                value: inputValue.email,
                required: "Campo obligatorio",
                pattern: {value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i, message: "Correo electrónico inválido"}
              })} aria-invalid={errors.email ? "true" : "false"} />
              {errors.email && <p className='text_error' role="alert">{errors.email?.message}</p>}
            </label>
          </section>

          {/* building fields */}

          <section className='fields'>
            <label className='bodyXLBold' htmlFor='address'>Dirección de la comunidad *
              <input className='input bodyLRegular' type="text" id='address' placeholder="Dirección de la comunidad" onChange={handleChange} {...register("address", {
                value: inputValue.address,
                required: "Campo obligatorio"
              })} aria-invalid={errors.address ? "true" : "false"} />
              {errors.address &&  <p className='text_error' role="alert">Campo obligatorio</p>}
            </label>

            <label className='bodyXLBold' htmlFor='zipCode'>C.P
              <input className='input bodyLRegular' type="number" id='zipCode' placeholder="XXXXX" onChange={handleChange} {...register("postal_code", {
                value: inputValue.postal_code,
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 7,
                pattern: {value: /^([0-9]*$)/, message: "Código postal inválido"}
              })} aria-invalid={errors.postal_code ? "true" : "false"} />
              {errors.postal_code &&  <p className='text_error' role="alert">{errors.postal_code?.message}</p>}
            </label>
          </section>
          
          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='zone'>Localidad
              <input className='input' type="text" id='zone' placeholder="Localidad" onChange={handleChange} {...register("city", {
                value: inputValue.city,
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 30,
                pattern: {value: /^[a-zA-Z ]*$/, message: "Nombre de localidad inválido"}
              })} aria-invalid={errors.city ? "true" : "false"} />
              {errors.city &&  <p className='text_error' role="alert">{errors.city?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='province'>Provincia
              <input className='input' type="text" id='province' placeholder="Provincia" onChange={handleChange} {...register("province", {
                value: inputValue.province,
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 30,
                pattern: {value: /^[a-zA-Z ]*$/, message: "Nombre de provincia inválido"}
              })} aria-invalid={errors.province ? "true" : "false"} />
              {errors.province &&  <p className='text_error' role="alert">{errors.province?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='cif'>CIF
              <input className='input' type="text" id='cif' placeholder="B XXX XXX XXX" onChange={handleChange} {...register("cif", {
                required: "Campo obligatorio",
                minLength: 9,
                maxLength: 11,
                pattern: {value: /^[a-zA-Z0-9]{9,11}/, message: "CIF inválido"}
              })} aria-invalid={errors.cif ? "true" : "false"} />
              {errors.cif &&  <p className='text_error' role="alert">{errors.cif?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='meters'>Superficie de zonas comunes
              <input className='input' type="text" id='meters' placeholder="XXXX.XX" onChange={handleChange} {...register("communal_areas_area", {
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 20,
                pattern: {value: /^\d*\.\d+$/, message: "Formato inválido"}
              })} aria-invalid={errors.communal_areas_area ? "true" : "false"} />
              {errors.communal_areas_area &&  <p className='text_error' role="alert">{errors.communal_areas_area?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='householdsMeters'>Superficie de viviendas
              <input className='input' type="text" id='householdsMeters' placeholder="XXXX.XX" onChange={handleChange} {...register("housing_area", {
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 20,
                pattern: {value: /^\d*\.\d+$/, message: "Formato inválido"}
              })} aria-invalid={errors.housing_area ? "true" : "false"} />
              {errors.housing_area &&  <p className='text_error' role="alert">{errors.housing_area?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='householdsNumber'>Número de viviendas
              <input className='input' type="text" id='householdsNumber' placeholder="XXX" onChange={handleChange} {...register("number_of_apartments", {
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 7,
                pattern: {value: /^([0-9]*$)/, message: "Formato inválido"}
              })} aria-invalid={errors.number_of_apartments ? "true" : "false"} />
              {errors.number_of_apartments &&  <p className='text_error' role="alert">{errors.number_of_apartments?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='buildingYear'>Año de construcción
              <input className='input' type="text" id='buildingYear' placeholder="XXXX" onChange={handleChange} {...register("year_of_construction", {
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 5,
                pattern: {value: /^([0-9]*$)/, message: "Formato inválido"}
              })} aria-invalid={errors.year_of_construction ? "true" : "false"} />
              {errors.year_of_construction &&  <p className='text_error' role="alert">{errors.year_of_construction?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='ref'>Referencia catastral
              <input className='input' type="text" id='ref' placeholder="13 077 A 018 00039 0000 FP" onChange={handleChange} {...register("cadastre_number", {
                required: "Campo obligatorio",
                minLength: 3,
                maxLength: 30,
                pattern: {value: /^[a-zA-Z0-9 ]*$/, message: "Formato inválido"}
              })} aria-invalid={errors.cadastre_number ? "true" : "false"} />
              {errors.cadastre_number &&  <p className='text_error' role="alert">{errors.cadastre_number?.message}</p>}
            </label>
          </section> 


          <section className='fields'>
            <label  className='bodyXLBold' htmlFor='energyCertificate'>Certificación de eficiencia energética
              <select name="energy_efficiency_certificate" id='energyCertificate' {...register("energy_efficiency_certificate")}>
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
              </select>
              {errors.energy_efficiency_certificate &&  <p className='text_error' role="alert">{errors.energy_efficiency_certificate?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='name_of_community'>Nombre de comunidad
              <input className='input' type="text" id='name_of_community' placeholder="Nombre de comunidad" onChange={handleChange} {...register("name_of_community", {
                value: inputValue.name_of_community,
                minLength: 3,
                maxLength: 30,
                pattern: {value: /^[a-zA-Z0-9 ]*$/, message: "Nombre de comunidad inválido"}
              })} aria-invalid={errors.name_of_community ? "true" : "false"} />
              {errors.name_of_community &&  <p className='text_error' role="alert">{errors.name_of_community?.message}</p>}
            </label>
          </section> 

          {/* community fields */}
          <h2>Características de la comunidad</h2>

          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuál ha sido su mantenimiento a lo largo de los años?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuál es el tipo de estructura de los edificios (por ejemplo, hormigón, acero, madera)?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuál es la composición actual del tejado o cubierta de los edificios en la urbanización?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuál es la superficie total de las cubiertas de todos los edificios?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existen zonas comunes con grandes superficies acristaladas?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuál es el consumo energético promedio de la urbanización?
              <select name="energy_efficiency_certificate">
                  <option value="Entre 0 y 5.000kW">Entre 0 y 5.000kW</option>
                  <option value="Entre 5.000 y 10.000kW">Entre 5.000 y 10.000kW</option>
                  <option value="Entre 10.000 y 100.000kW">Entre 10.000 y 100.000kW</option>
                  <option value="Más de 100.000kW">Más de 100.000kW</option>
              </select>
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuenta con garaje? ¿Es al aire libre, cubierto o subterráneo? ¿De cuántas plazas dispone? ¿Y plantas?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Hay ascensores en los edificios? ¿Cuántos hay en cada edificio?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Qué tipo de iluminación se utiliza en las zonas comunes (portal, descansillos, zonas de esparcimiento, etcétera)
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuenta la urbanización con piscina? ¿De qué tamaño? ¿Está ajardinada?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Hay parques infantiles? ¿Cuenta con algún tipo de zona de sombra?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existen jardineras y zonas verdes? ¿Cuál es su superficie?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existen otras zonas de recreo como pistas deportivas, gimnasio u otros? ¿Cuál es su superficie?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existe algún estudio previo de eficiencia energética en la comunidad?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Se han realizado análisis de puentes térmicos en la construcción actual?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existen restricciones legales o normativas que puedan afectar la implementación de cubiertas verdes o el uso de materiales ecosostenibles?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Existe alguna patología o problema específico de aislamiento térmico en los edificios actualmente?
            <input className='input' type="text" placeholder="" />
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Qué beneficios consideráis obtener mediante el aislamiento térmico y las soluciones sostenibles propuestas?
              <select name="energy_efficiency_certificate">
                  <option value="Reducción del consumo energético">Reducción del consumo energético</option>
                  <option value="Ahorro de costos">Ahorro de costos</option>
                  <option value="Mejora del confort interior">Mejora del confort interior</option>
                  <option value="Reducción de ruido">Reducción de ruido</option>

                  <option value="Reducción de ruido">Reducción de gases de efecto invernadero</option>
                  <option value="Reducción de ruido">Mayor durabilidad de los edificios y las instalaciones</option>
                  <option value="Reducción de ruido">Aumento del valor de las propiedades</option>
              </select>
            </label>
          </section>
          <section className='fields'>
            <label  className='bodyXLBold'>¿Cuáles son las expectativas y opiniones generales de los residentes sobre la implementación de estas medidas?
              <select name="energy_efficiency_certificate">
                  <option value="Reducción del consumo energético">Reducción de costos de comunidad</option>
                  <option value="Mayor confort y bienestar en los hogares">Mayor confort y bienestar en los hogares</option>
                  <option value="Mayor confort y bienestar en las zonas comunes">Mayor confort y bienestar en las zonas comunes</option>
                  <option value="Dejar de usar la calefacción y el aire acondicionado">Dejar de usar la calefacción y el aire acondicionado</option>
                  <option value="Menor necesidad de mantenimiento y reparaciones">Menor necesidad de mantenimiento y reparaciones</option>
                  <option value="Contribución a la protección del medio ambiente">Contribución a la protección del medio ambiente</option>
                  <option value="Sentimiento de comunidad">Sentimiento de comunidad</option>
                  <option value="Ser la envidia de mi barrio">Ser la envidia de mi barrio</option>
              </select>
            </label>
          </section>



        {/* <section className='form_checkboxes'>
          <section className='form_termsAndConditions'>
            <input {...register("checkbox")} type="checkbox" id="termsAndConditions" value="Aceptar términos y condiciones" />
            <label htmlFor="termsAndConditions">He leído y acepto las condiciones de la <a>Política de Privacidad</a></label>
          </section>
          <section className='form_notifications'>
            <input {...register("checkbox")} type="checkbox" value="Recibir notificaciones" />
            <label>Acepto recibir comunicaciones de carácter publicitario e informativo con noticias, consejos y recomendaciones relacionadas con temas de ecosostenibilidad y medioambiente.</label>
          </section>
        </section>  */}


          <button className='cta_btn titleXS' type="submit">Enviar</button>
        </form>
      </section>
      <Modal isVisible={isVisible} title={modalInfo.title} content={modalInfo.content}/>

    </>
  );
};


export default TechnicalForm;