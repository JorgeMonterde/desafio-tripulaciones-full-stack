import { useState } from 'react';
import { useForm } from 'react-hook-form';




const inputDefaultValues = {
  name: '',
  lastName: '',
  role: '',
  communityType: '',
  email: '',
  address: '',
  zone: '',
  province: ''
};


const Form = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: inputDefaultValues });
  const onSubmit = (data) => console.log(data);


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
            <input className='input bodyLRegular' type="text" placeholder="Nombre" onChange={handleChange} {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/,
              message: "Verificar nombre"
            })} aria-invalid={errors.name ? "true" : "false"} />
            {errors.name &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>
        
          <label className='bodyXLBold'>Apellidos *
            <input className='input bodyLRegular' type="text" placeholder="Apellidos" onChange={handleChange} {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.lastName ? "true" : "false"} />
            {errors.lastName &&  <p className='text_error' role="alert">Campo obligatorio</p>}
          </label>
        </section>

        <section className='fields'>    
          <label  className='bodyXLBold'>Función *
            <select name="role" {...register("role", {required: {
              value: true,
              message: "Campo obligatorio"
            }})}>
              <option value="admin">Administración</option>
              <option value="precident">Presidente</option>
              <option value="otro">Otro</option>
            </select>
            {errors.role &&  <p className='text_error' role="alert">{errors.role?.message}</p>}
          </label>

          <label className='bodyXLBold'>Tipo de comunidad
            <select name="communityType" {...register("communityType")}>
              <option value="admin">Un único edificio</option>
              <option value="precident">Urbanización</option>
            </select>
          </label>
        </section>
        
        <section className='fields'>
          <label className='bodyXLBold'>Teléfono *
            <input className='input bodyLRegular' type="number" placeholder="número de teléfono" onChange={handleChange} {...register("phone", {
              required: "Verificar número de teléfono",
              pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
            })} aria-invalid={errors.phone ? "true" : "false"} />
            {errors.phone &&  <p className='text_error' role="alert">Campo obligatorio</p>}
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
            <input className='input bodyLRegular' type="number" placeholder="Código postal" onChange={handleChange} {...register("zipCode", {
              pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
            })} aria-invalid={errors.zipCode ? "true" : "false"} />
            {errors.zipCode &&  <p className='text_error' role="alert">{errors.zipCode?.message}</p>}
          </label>
        </section>
       
        <section className='fields'>   
          <label className='bodyXLBold'>Localidad
            <input className='input' type="text" placeholder="Localidad" onChange={handleChange} {...register("zone", {
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.zone ? "true" : "false"} />
            {errors.zone &&  <p className='text_error' role="alert">{errors.zone?.message}</p>}
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