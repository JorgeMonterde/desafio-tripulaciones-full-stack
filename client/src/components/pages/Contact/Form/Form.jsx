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


const Form = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();

  //Submit function:
  const onSubmit = async(data) => {
    console.log("data???", data)
    const response1 = await axios.post("http://localhost:3000/api/leads/lead", data, { withCredentials: true });
    console.log("auth response: ",response1)

    if(response1.data.success){
      // Success
      console.log("From client: You have send the form");
      // send email to lead
      console.log("try send email to: ", data.email);
      const response2 = await axios.get(`http://localhost:3000/api/leads/email/${data.email}`, { withCredentials: true });
      if(response2.data.success){
        console.log(`An email has been send to ${data.email}`);
        navigate("/catalogue");
      } else {
        console.log("We could not send you an email");
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
      <section className='contact_header'>
        <article className='header_question'>
          <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
          <p className='bodyXXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </article>
        <section className='contact_us'>
          <article>
            <h3 className='TitleM'>Llámanos al</h3>
            <p className='TitleM'>xxx.xx.xx.xx</p>
          </article>
          <article>
            <h3 className='TitleM'>O escríbenos a</h3>
            <p className='TitleM'>abc@abc.es</p>
          </article>
        </section>
      </section>

      <h1 className='text_band'>Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL · Beneficios · Title XL ·</h1>

      <article className='form_header'>
        <h1 className='TitleM'>¿Tienes alguna pregunta?</h1>
        <p className='bodyXXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
      </article>
      <form className='form_contact' onSubmit={handleSubmit(onSubmit)}>
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
            <select name="lead_position" {...register("lead_position", {required: {
              value: true,
              message: "Campo obligatorio"
            }})}>
              <option value="admin">Administración</option>
              <option value="president">Presidente</option>
              <option value="otro">Otro</option>
            </select>
            {errors.lead_position &&  <p className='text_error' role="alert">{errors.lead_position?.message}</p>}
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


export default Form;