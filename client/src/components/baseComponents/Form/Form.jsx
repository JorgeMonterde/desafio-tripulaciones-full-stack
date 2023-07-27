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
      <form className='form_contact' onSubmit={handleSubmit(onSubmit)}>
       
        <label>Nombre *
          <input className='input' type="text" placeholder="Nombre" onChange={handleChange} {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/,
            message: "Verificar nombre"
          })} aria-invalid={errors.name ? "true" : "false"} />
          {errors.name &&  <p className='text_error' role="alert">Campo obligatorio</p>}
        </label>
       
        <label>Apellidos *
          <input className='input' type="text" placeholder="Apellidos" onChange={handleChange} {...register("lastName", {
            required: true,
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.lastName ? "true" : "false"} />
          {errors.lastName &&  <p className='text_error' role="alert">Campo obligatorio</p>}
        </label>


        <label>Función *
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




        <label>Tipo de comunidad
          <select name="communityType" {...register("communityType")}>
            <option value="admin">Un único edificio</option>
            <option value="precident">Urbanización</option>
          </select>
        </label>


        <label>Teléfono *
          <input className='input' type="number" placeholder="número de teléfono" onChange={handleChange} {...register("phone", {
            required: "Verificar número de teléfono",
            pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
          })} aria-invalid={errors.phone ? "true" : "false"} />
          {errors.phone &&  <p className='text_error' role="alert">Campo obligatorio</p>}
        </label>


        <label>Correo electrónico *
          <input className='input' type="email" id='email' placeholder="Correo electrónico" onChange={handleChange} {...register("email", {
            required: "Verificar correo electrónico",
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
          })} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email &&  <p className='text_error' role="alert">{errors.email?.message}</p>}
        </label>


        <label>Dirección de la comunidad *
          <input className='input' type="text" placeholder="Dirección de la comunidad" onChange={handleChange} {...register("address", {
            required: "Verificar dirección de la comunidad"
          })} aria-invalid={errors.address ? "true" : "false"} />
          {errors.address &&  <p className='text_error' role="alert">Campo obligatorio</p>}
        </label>


        <label>C.P
          <input className='input' type="number" placeholder="Código postal" onChange={handleChange} {...register("zipCode", {
            pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
          })} aria-invalid={errors.zipCode ? "true" : "false"} />
          {errors.zipCode &&  <p className='text_error' role="alert">{errors.zipCode?.message}</p>}
        </label>
       
        <label>Localidad
          <input className='input' type="text" placeholder="Localidad" onChange={handleChange} {...register("zone", {
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.zone ? "true" : "false"} />
          {errors.zone &&  <p className='text_error' role="alert">{errors.zone?.message}</p>}
        </label>


        <label>Provincia
          <input className='input' type="text" placeholder="Provincia" onChange={handleChange} {...register("province", {
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.province ? "true" : "false"} />
          {errors.province &&  <p className='text_error' role="alert">{errors.province?.message}</p>}
        </label>
       
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