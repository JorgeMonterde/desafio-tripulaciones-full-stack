import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const inputDefaultValues = {
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
  energy_efficiency_certificate:""

};


const TechnicalForm = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();

  //Submit function:
  const onSubmit = async(data) => {
    console.log("data???", data)
    //store client info
    const {first_name, surname, email, telephone_num, client_position, password} = data;
    const clientData = {first_name, surname, email, telephone_num, client_position, password};
    
    const clientResponse = await axios.post("http://localhost:3000/api/clients/client", clientData, { withCredentials: true });
    const {client_id} = clientResponse.data.data;
    console.log("auth response: ",clientResponse);

    //store building info
    const {address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate} = data;
    const buildingData = {client_id, address, postal_code, city, province, community_type, cif, total_area, communal_areas_area, housing_area, number_of_apartments, year_of_construction, cadastre_number, energy_efficiency_certificate};

    const buildingResponse = await axios.post("http://localhost:3000/api/buildings/building", buildingData, { withCredentials: true });
    console.log("auth response: ",buildingResponse);

    if(clientResponse.data.success && buildingResponse.data.success){
      // Confirm building characteristics are according to validation
      
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
      <h1 className='text_band'>Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL ·</h1>

      <article className='form_header'>
        <h1 className='TitleM'>---Rellene el siguiente formulario para que valoremos su situación---</h1>
        <p className='bodyXXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
      </article>
      <form className='form_contact' onSubmit={handleSubmit(onSubmit)}>

        {/* client fields */}

        <section className='fields'>
          <label className='bodyXLBold'>Nombre *
            <input className='input bodyLRegular' type="text" placeholder="Nombre" onChange={handleChange} {...register("first_name", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/,
              message: "Verificar nombre"
            })} aria-invalid={errors.first_name ? "true" : "false"} />
            {errors.first_name &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>
        
          <label className='bodyXLBold'>Apellidos *
            <input className='input bodyLRegular' type="text" placeholder="Apellidos" onChange={handleChange} {...register("surname", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.surname ? "true" : "false"} />
            {errors.surname &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>
        </section>

        <section className='fields'>    
          <label  className='bodyXLBold'>Función *
            <select name="client_position" {...register("client_position", {required: {
              value: true,
              message: "Campo obligatorio"
            }})}>
              <option value="admin">Administración</option>
              <option value="president">Presidente</option>
              <option value="otro">Otro</option>
            </select>
            {errors.client_position &&  <p className='text_error' role="alert">{errors.client_position?.message}</p>}
          </label>

          <label className='bodyXLBold'>Tipo de comunidad
            <select name="community_type" {...register("community_type")}>
              <option value="admin">Un único edificio</option>
              <option value="president">Urbanización</option>
            </select>
          </label>
        </section>
        
        <section className='fields'>
          <label className='bodyXLBold'>Teléfono *
            <input className='input bodyLRegular' type="number" placeholder="número de teléfono" onChange={handleChange} {...register("telephone_num", {
              required: "Verificar número de teléfono",
              pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
            })} aria-invalid={errors.telephone_num ? "true" : "false"} />
            {errors.telephone_num &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>

          <label className='bodyXLBold'>Correo electrónico *
            <input className='input bodyLRegular' type="email" id='email' placeholder="Correo electrónico" onChange={handleChange} {...register("email", {
              required: "Verificar correo electrónico",
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
            })} aria-invalid={errors.email ? "true" : "false"} />
            {errors.email &&  <p className='text_error' role="alert">{errors.email?.message}</p>}
          </label>
        </section>

        {/* building fields */}

        <section className='fields'>
          <label className='bodyXLBold'>Dirección de la comunidad *
            <input className='input bodyLRegular' type="text" placeholder="Dirección de la comunidad" onChange={handleChange} {...register("address", {
              required: "Verificar dirección de la comunidad"
            })} aria-invalid={errors.address ? "true" : "false"} />
            {errors.address &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>

          <label className='bodyXLBold'>C.P
            <input className='input bodyLRegular' type="number" placeholder="Código postal" onChange={handleChange} {...register("postal_code", {
              pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
            })} aria-invalid={errors.postal_code ? "true" : "false"} />
            {errors.postal_code &&  <p className='text_error' role="alert">{errors.postal_code?.message}</p>}
          </label>
        </section>
       
        <section className='fields'>   
          <label className='bodyXLBold'>Localidad
            <input className='input' type="text" placeholder="Localidad" onChange={handleChange} {...register("city", {
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.city ? "true" : "false"} />
            {errors.city &&  <p className='text_error' role="alert">{errors.city?.message}</p>}
          </label>

          <label className='bodyXLBold'>Provincia
            <input className='input' type="text" placeholder="Provincia" onChange={handleChange} {...register("province", {
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.province ? "true" : "false"} />
            {errors.province &&  <p className='text_error' role="alert">{errors.province?.message}</p>}
          </label>
        </section> 

        <section className='fields'>   
          <label className='bodyXLBold'>CIF
            <input className='input' type="text" placeholder="CIF" onChange={handleChange} {...register("cif")} aria-invalid={errors.cif ? "true" : "false"} />
            {errors.cif &&  <p className='text_error' role="alert">{errors.cif?.message}</p>}
          </label>

          <label className='bodyXLBold'>Superficie de zonas comunes
            <input className='input' type="text" placeholder="Superficie de zonas comunes" onChange={handleChange} {...register("communal_areas_area", {
              minLength: 3,
              maxLength: 20
            })} aria-invalid={errors.communal_areas_area ? "true" : "false"} />
            {errors.communal_areas_area &&  <p className='text_error' role="alert">{errors.communal_areas_area?.message}</p>}
          </label>
        </section> 

        <section className='fields'>   
          <label className='bodyXLBold'>Superficie de viviendas
            <input className='input' type="text" placeholder="Superficie de viviendas" onChange={handleChange} {...register("housing_area")} aria-invalid={errors.housing_area ? "true" : "false"} />
            {errors.housing_area &&  <p className='text_error' role="alert">{errors.housing_area?.message}</p>}
          </label>

          <label className='bodyXLBold'>Número de viviendas
            <input className='input' type="text" placeholder="Número de viviendas" onChange={handleChange} {...register("number_of_apartments", {
              maxLength: 20
            })} aria-invalid={errors.number_of_apartments ? "true" : "false"} />
            {errors.number_of_apartments &&  <p className='text_error' role="alert">{errors.number_of_apartments?.message}</p>}
          </label>
        </section> 

        <section className='fields'>   
          <label className='bodyXLBold'>Año de construcción
            <input className='input' type="text" placeholder="Año de construcción" onChange={handleChange} {...register("year_of_construction")} aria-invalid={errors.year_of_construction ? "true" : "false"} />
            {errors.year_of_construction &&  <p className='text_error' role="alert">{errors.year_of_construction?.message}</p>}
          </label>

          <label className='bodyXLBold'>Referencia catastral
            <input className='input' type="text" placeholder="Referencia catastral" onChange={handleChange} {...register("cadastre_number", {
              minLength: 3,
              maxLength: 20
            })} aria-invalid={errors.cadastre_number ? "true" : "false"} />
            {errors.cadastre_number &&  <p className='text_error' role="alert">{errors.cadastre_number?.message}</p>}
          </label>
        </section> 

        <section className='fields'>   
          <label className='bodyXLBold'>Certificación de eficiencia energética
            <input className='input' type="text" placeholder="Certificación de eficiencia energética" onChange={handleChange} {...register("energy_efficiency_certificate", {
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{1,20}/
            })} aria-invalid={errors.energy_efficiency_certificate ? "true" : "false"} />
            {errors.energy_efficiency_certificate &&  <p className='text_error' role="alert">{errors.energy_efficiency_certificate?.message}</p>}
          </label>
        </section> 






        <section className='form_checkboxes'>
          <section className='form_termsAndConditions'>
            <input {...register("checkbox")} type="checkbox" id="termsAndConditions" value="Aceptar términos y condiciones" />
            <label htmlFor="termsAndConditions">He leído y acepto las condiciones de la <a>Política de Privacidad</a></label>
          </section>
          <section className='form_notifications'>
            <input {...register("checkbox")} type="checkbox" value="Recibir notificaciones" />
            <label>Acepto recibir comunicaciones de carácter publicitario e informativo con noticias, consejos y recomendaciones relacionadas con temas de ecosostenibilidad y medioambiente.</label>
          </section>
        </section>


        <button type="submit">Enviar</button>
      </form>
    </>
  );
};


export default TechnicalForm;
