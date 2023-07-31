import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../baseComponents/Modal/Modal";

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
      const response = await axios.get(`http://localhost:3000/api/leads/lead/${email}`, { withCredentials: true });

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
  
  
        


  //Submit function:
  const onSubmit = async(data) => {
    //1º: validar
    //2º: guardar datos
    //3º: enviar correo con password

    console.log("data???", data);
    //store client info
    const {first_name, surname, email, telephone_num, client_position, password} = data;
    const clientData = {first_name, surname, email, telephone_num, client_position, password};
    
    const clientResponse = await axios.post("http://localhost:3000/api/clients/client", clientData, { withCredentials: true });
    const {client_id} = clientResponse.data.data;
    console.log("auth response: ",clientResponse);

    //store building info
    const {address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate, name_of_community} = data;
    const buildingData = {client_id, address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate, name_of_community};

    const buildingResponse = await axios.post("http://localhost:3000/api/buildings/building", buildingData, { withCredentials: true });
    console.log("auth response: ",buildingResponse);

    if(clientResponse.data.success && buildingResponse.data.success){
      // Go to validation: Confirm building specifications are according to validation

        //validation true: set password and redirect to "login"
        const response = await axios.get(`http://localhost:3000/auth/email/recoverpassword/${email}`, { withCredentials: true });

        //show modal
        changeModalInfo("Enhorabuena,","el formulario ha sido correctamente validado y ya hemos guardado su información en nuestra base de datos. Le hemos mandado un email con un link para completar su registro en la aplicacion. Si no lo ha recibido, póngase en contacto con nosotros.");
        changeVisibleState();

        //validation false: message and redirect to "home"
        //show modal
        /* changeModalInfo("Lo sentimos,","la validación no ha resultado exitosa. Nos pondremos en contacto con usted lo antes posible.");
        changeVisibleState(); */
      
    } else {
      // Fail
      console.log("From client: You could not send the form");
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
        
        <h1 className='text_band'>Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL ·</h1>

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
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/,
                message: "Verificar nombre"
              })} aria-invalid={errors.first_name ? "true" : "false"} />
              {errors.first_name &&  <p className='text_error' role="alert">Campo obligatorio</p>}
            </label>
          
            <label className='bodyXLBold' htmlFor='lastName'>Apellidos *
              <input className='input bodyLRegular' type="text" id='lastName' placeholder="Apellidos" onChange={handleChange} {...register("surname", {
                value: inputValue.surname,
                required: true,
                minLength: 3,
                maxLength: 20,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
              })} aria-invalid={errors.surname ? "true" : "false"} />
              {errors.surname &&  <p className='text_error' role="alert">Campo obligatorio</p>}
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
              <select name="community_type" id='communityType' {...register("community_type")}>
                <option value="admin">Un único edificio</option>
                <option value="president">Urbanización</option>
              </select>
            </label>
          </section>
          
          <section className='fields'>
            <label className='bodyXLBold' htmlFor='phone'>Teléfono *
              <input className='input bodyLRegular' type="number" id='phone' placeholder="número de teléfono" onChange={handleChange} {...register("telephone_num", {
                value: inputValue.telephone_num,
                required: "Verificar número de teléfono",
                pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
              })} aria-invalid={errors.telephone_num ? "true" : "false"} />
              {errors.telephone_num &&  <p className='text_error' role="alert">Campo obligatorio</p>}
            </label>

            <label className='bodyXLBold' htmlFor='email'>Correo electrónico *
              <input className='input bodyLRegular' type="email" id='email' placeholder="Correo electrónico" onChange={handleChange} {...register("email", {
                value: inputValue.email,
                required: "Verificar correo electrónico",
                pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
              })} aria-invalid={errors.email ? "true" : "false"} />
              {errors.email &&  <p className='text_error' role="alert">{errors.email?.message}</p>}
            </label>
          </section>

          {/* building fields */}

          <section className='fields'>
            <label className='bodyXLBold' htmlFor='address'>Dirección de la comunidad *
              <input className='input bodyLRegular' type="text" id='address' placeholder="Dirección de la comunidad" onChange={handleChange} {...register("address", {
                value: inputValue.address,
                required: "Verificar dirección de la comunidad"
              })} aria-invalid={errors.address ? "true" : "false"} />
              {errors.address &&  <p className='text_error' role="alert">Campo obligatorio</p>}
            </label>

            <label className='bodyXLBold' htmlFor='zipCode'>C.P
              <input className='input bodyLRegular' type="number" id='zipCode' placeholder="Código postal" onChange={handleChange} {...register("postal_code", {
                value: inputValue.postal_code,
                pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
              })} aria-invalid={errors.postal_code ? "true" : "false"} />
              {errors.postal_code &&  <p className='text_error' role="alert">{errors.postal_code?.message}</p>}
            </label>
          </section>
        
          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='zone'>Localidad
              <input className='input' type="text" id='zone' placeholder="Localidad" onChange={handleChange} {...register("city", {
                value: inputValue.city,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
              })} aria-invalid={errors.city ? "true" : "false"} />
              {errors.city &&  <p className='text_error' role="alert">{errors.city?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='province'>Provincia
              <input className='input' type="text" id='province' placeholder="Provincia" onChange={handleChange} {...register("province", {
                value: inputValue.province,
                minLength: 3,
                maxLength: 20,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
              })} aria-invalid={errors.province ? "true" : "false"} />
              {errors.province &&  <p className='text_error' role="alert">{errors.province?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='cif'>CIF
              <input className='input' type="text" id='cif' placeholder="CIF" onChange={handleChange} {...register("cif")} aria-invalid={errors.cif ? "true" : "false"} />
              {errors.cif &&  <p className='text_error' role="alert">{errors.cif?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='meters'>Superficie de zonas comunes
              <input className='input' type="text" id='meters' placeholder="Superficie de zonas comunes" onChange={handleChange} {...register("communal_areas_area", {
                minLength: 3,
                maxLength: 20
              })} aria-invalid={errors.communal_areas_area ? "true" : "false"} />
              {errors.communal_areas_area &&  <p className='text_error' role="alert">{errors.communal_areas_area?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='householdsMeters'>Superficie de viviendas
              <input className='input' type="text" id='householdsMeters' placeholder="Superficie de viviendas" onChange={handleChange} {...register("housing_area")} aria-invalid={errors.housing_area ? "true" : "false"} />
              {errors.housing_area &&  <p className='text_error' role="alert">{errors.housing_area?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='householdsNumber'>Número de viviendas
              <input className='input' type="text" id='householdsNumber' placeholder="Número de viviendas" onChange={handleChange} {...register("number_of_apartments", {
                maxLength: 20
              })} aria-invalid={errors.number_of_apartments ? "true" : "false"} />
              {errors.number_of_apartments &&  <p className='text_error' role="alert">{errors.number_of_apartments?.message}</p>}
            </label>
          </section> 

          <section className='fields'>   
            <label className='bodyXLBold' htmlFor='buildingYear'>Año de construcción
              <input className='input' type="text" id='buildingYear' placeholder="Año de construcción" onChange={handleChange} {...register("year_of_construction")} aria-invalid={errors.year_of_construction ? "true" : "false"} />
              {errors.year_of_construction &&  <p className='text_error' role="alert">{errors.year_of_construction?.message}</p>}
            </label>

            <label className='bodyXLBold' htmlFor='ref'>Referencia catastral
              <input className='input' type="text" id='ref' placeholder="Referencia catastral" onChange={handleChange} {...register("cadastre_number", {
                minLength: 3,
                maxLength: 20
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
                maxLength: 20,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,30}/
              })} aria-invalid={errors.name_of_community ? "true" : "false"} />
              {errors.name_of_community &&  <p className='text_error' role="alert">{errors.name_of_community?.message}</p>}
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