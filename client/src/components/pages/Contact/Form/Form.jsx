import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios";



const inputDefaultValues = {
  first_name: '',
  surname: '',
  lead_position: '',
  community_type: '',
  email: '',
  address: '',
  city: '',
  province: '',
  telephone_num: "",
  postal_code: ""
};


const Form = (props) => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();
  const {visible, changeVisibleState} = props.isVisible;
  const {changeModalInfo} = props;

  //Submit function:
  const onSubmit = async(data) => {
    console.log("data???", data)
    const response1 = await axios.post("/api/leads/lead", data, { withCredentials: true });
    console.log("auth response: ",response1)

    if(response1.data.success){
      // Success
      console.log("From client: You have send the form");
      // send email to lead
      console.log("try send email to: ", data.email);
      const response2 = await axios.get(`/api/leads/email/${data.email}`, { withCredentials: true });
      if(response2.data.success){
        console.log(`An email has been send to ${data.email}`);
        //show modal
        changeModalInfo("¡Tu formulario de contacto ha sido rellenado con éxito!", "Te hemos enviado un email con un cuestionario de validación para valorar la viabilidad de un proyecto con SOL7. ¡Solo te llevará 5 minutos rellenarlo! Si prefieres contactar con nosotros personalmente, escríbenos un email a info@solsiete.com o llámanos al 600 600 600");
        changeVisibleState();

        //navigate("/catalogue");
      } else {
        console.log("We could not send you an email");
        //show modal
        changeModalInfo("¡Ops! Lo sentimos, parece que algo ha fallado.", " Por favor, inténtalo de nuevo en unos minutos. Si prefieres contactar con nosotros personalmente, escríbenos un email a info@solsiete.com o llámanos al 600 600 600");
        changeVisibleState();

      }
      
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
      <form className='form_contact' onSubmit={handleSubmit(onSubmit)}>
        <section className='fields'>
          <label className='bodyXLBold label_input'>Nombre *
            <input className='input bodyLRegular' type="text" placeholder="Nombre" onChange={handleChange} {...register("first_name", {
              required: "Campo obligatorio",
              minLength: 3,
              maxLength: 20,
              pattern: {value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/, message: "Nombre inválido"}
            })} aria-invalid={errors.first_name ? "true" : "false"} />
            {errors.first_name &&  <p className='text_error' role="alert">{errors.first_name.message}</p>}
          </label>
        
          <label className='bodyXLBold label_input'>Apellidos *
            <input className='input bodyLRegular' type="text" placeholder="Apellidos" onChange={handleChange} {...register("surname", {
              required: "Campo obligatorio",
              minLength: 3,
              maxLength: 20,
              pattern: {value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/, message: "Apellidos inválidos"}
            })} aria-invalid={errors.surname ? "true" : "false"} />
            {errors.surname &&  <p className='text_error' role="alert">{errors.surname?.message}</p>}
          </label>
        </section>

        <section className='fields'>    
          <label  className='bodyXLBold label_input'>Función *
            <select name="lead_position" {...register("lead_position", {required: {
              value: true,
              message: 'Campo obligatorio'
            }})}>
              <option value="admin">Administración</option>
              <option value="president">Presidente</option>
              <option value="otro">Otro</option>
            </select>
            {errors.lead_position &&  <p className='text_error' role="alert">{errors.lead_position?.message}</p>}
          </label>

          <label className='bodyXLBold label_input'>Tipo de comunidad
            <select name="community_type" {...register("community_type")}>
              <option value="admin">Un único edificio</option>
              <option value="president">Urbanización</option>
            </select>
          </label>
        </section>
        
        <section className='fields'>
          <label className='bodyXLBold label_input'>Teléfono *
            <input className='input bodyLRegular' type="text" placeholder="+34 XXX XX XX XX" onChange={handleChange} {...register("telephone_num", {
              required: "Campo obligatorio",
              pattern: {value: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/, message: "Número de teléfono inválido"}
            })} aria-invalid={errors.telephone_num ? "true" : "false"} />
            {errors.telephone_num &&  <p className='text_error' role="alert">{errors.telephone_num?.message}</p>}
          </label>

          <label className='bodyXLBold label_input' htmlFor='email'>Correo electrónico *
            <input className='input bodyLRegular' type='email' id='email' placeholder='Correo electrónico' onChange={handleChange} {...register('email', {
              required: "Campo obligatorio",
              pattern: {value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i, message: "Correo electrónico inválido"}
            })} aria-invalid={errors.email ? 'true' : 'false'} />
            {errors.email &&  <p className='text_error' role='alert'>{errors.email?.message}</p>}
          </label>
        </section>

        <section className='fields'>
          <label className='bodyXLBold label_input' htmlFor='address'>Dirección de la comunidad *
            <input className='input bodyLRegular' type='text' id='address' placeholder='Dirección de la comunidad' onChange={handleChange} {...register('address', {
              required: 'Verificar dirección de la comunidad'
            })} aria-invalid={errors.address ? 'true' : 'false'} />
            {errors.address &&  <p className='text_error' role='alert'>Campo obligatorio</p>}
          </label>

          <label className='bodyXLBold label_input'>C.P
            <input className='input bodyLRegular' type="number" placeholder="XXXXX" onChange={handleChange} {...register("postal_code", {
              required: "Campo obligatorio",
              minLength: 3,
              maxLength: 7,
              pattern: {value: /^([0-9]*$)/, message: "Código postal inválido"}
            })} aria-invalid={errors.postal_code ? "true" : "false"} />
            {errors.postal_code &&  <p className='text_error' role="alert">{errors.postal_code?.message}</p>}
          </label>
        </section>
       
        <section className='fields'>   
          <label className='bodyXLBold label_input'>Localidad
            <input className='input' type="text" placeholder="Localidad" onChange={handleChange} {...register("city", {
              required: "Campo obligatorio",
              minLength: 3,
              maxLength: 30,
              pattern: {value: /^[a-zA-Z ]*$/, message: "Nombre de localidad inválido"}
            })} aria-invalid={errors.city ? "true" : "false"} />
            {errors.city &&  <p className='text_error' role="alert">{errors.city?.message}</p>}
          </label>


          <label className='bodyXLBold label_input' htmlFor='province'>Provincia
            <input className='input' type='text' placeholder='Provincia' id='province' onChange={handleChange} {...register('province', {
              required: "Campo obligatorio",
              minLength: 3,
              maxLength: 30,
              pattern: {value: /^[a-zA-Z ]*$/, message: "Nombre de provincia inválido"}
            })} aria-invalid={errors.province ? 'true' : 'false'} />
            {errors.province &&  <p className='text_error' role='alert'>{errors.province?.message}</p>}
          </label>
        </section> 

        <section className='form_checkboxes'>
          <section className='form_termsAndConditions'>
            <input {...register('termsAndConditions', {
              required: "Campo obligatorio",
            })} type='checkbox' id='termsAndConditions' value='Aceptar términos y condiciones' />
            <label htmlFor='termsAndConditions' className='bodyLRegular'>Declaro haber leído y acepto los <a href='#'>Términos y condiciones</a> y la <a href='#'>Política de Privacidad</a></label>
          </section>
            {errors.termsAndConditions &&  <p className='text_error checkbox_error' role='alert'>Acepte los términos y condiciones</p>}
          <section className='form_notifications'>
            <input {...register('checkbox')} type='checkbox' id='notifications' value='Recibir notificaciones' />
            <label htmlFor='notifications' className='bodyLRegular'>Consiento la utilización de mis datos con fines informativos y la introducción en la base de datos</label>
          </section>
        </section>


        <button className='cta_btn titleXS' type='submit'>Enviar</button>
      </form>
    </>
  );
};


export default Form;