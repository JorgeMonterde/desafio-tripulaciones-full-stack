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
        </label>
        {errors.name &&  <p className='text_error' role="alert">Campo obligatorio</p>}
        
        <label>Apellidos *
          <input className='input' type="text" placeholder="Apellidos" onChange={handleChange} {...register("lastName", {
            required: true, 
            minLength: 3, 
            maxLength: 20, 
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.lastName ? "true" : "false"} />
        </label>
        {errors.lastName &&  <p className='text_error' role="alert">Campo obligatorio</p>}

        <label>Función *
          <select name="role" {...register("role", {required: {
            value: true,
            message: "Campo obligatorio"
          }})}>
            <option value="admin">Administración</option>
            <option value="precident">Precidente</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        {errors.role &&  <p className='text_error' role="alert">{errors.role?.message}</p>}


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
        </label>
        {errors.phone &&  <p className='text_error' role="alert">Campo obligatorio</p>}

        <label>Correo electrónico *
          <input className='input' type="email" id='email' placeholder="Correo electrónico" onChange={handleChange} {...register("email", {
            required: "Verificar correo electrónico", 
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
          })} aria-invalid={errors.email ? "true" : "false"} />
        </label>
        {errors.email &&  <p className='text_error' role="alert">{errors.email?.message}</p>}

        <label>Dirección de la comunidad *
          <input className='input' type="text" placeholder="Dirección de la comunidad" onChange={handleChange} {...register("address", {
            required: "Verificar dirección de la comunidad"
          })} aria-invalid={errors.address ? "true" : "false"} />
        </label>
        {errors.address &&  <p className='text_error' role="alert">Campo obligatorio</p>}

        <label>C.P
          <input className='input' type="number" placeholder="Código postal" onChange={handleChange} {...register("zipCode", {
            pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
          })} aria-invalid={errors.zipCode ? "true" : "false"} />
        </label>
        {errors.zipCode &&  <p className='text_error' role="alert">{errors.zipCode?.message}</p>}
        
        <label>Localidad
          <input className='input' type="text" placeholder="Localidad" onChange={handleChange} {...register("zone", {
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.zone ? "true" : "false"} />
        </label>
        {errors.zone &&  <p className='text_error' role="alert">{errors.zone?.message}</p>}

        <label>Provincia
          <input className='input' type="text" placeholder="Provincia" onChange={handleChange} {...register("province", {
            minLength: 3,
            maxLength: 20,
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
          })} aria-invalid={errors.province ? "true" : "false"} />
        </label>
        {errors.province &&  <p className='text_error' role="alert">{errors.province?.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;