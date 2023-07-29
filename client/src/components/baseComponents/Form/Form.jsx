import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextBand from '../TextBand/TextBand';


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
      <article className='form_header'>
        <h1 className='TitleM'>Me interesa</h1>
        <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
      </article>
      <form className='form_contact' onSubmit={handleSubmit(onSubmit)}>
        <section className='fields'>
          <label className='bodyXLBold' htmlFor='name'>Nombre *
            <input className='input bodyLRegular' type='text' id='name' placeholder='Nombre' onChange={handleChange} {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/,
              message: 'Verificar nombre'
            })} aria-invalid={errors.name ? 'true' : 'false'} />
            {errors.name &&  <p className='text_error' role='alert'>Campo obligatorio</p>}
          </label>
        
          <label className='bodyXLBold' htmlFor='lastName'>Apellidos *
            <input className='input bodyLRegular' type='text' id='lastName' placeholder='Apellidos' onChange={handleChange} {...register('lastName', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.lastName ? 'true' : 'false'} />
            {errors.lastName &&  <p className='text_error' role='alert'>Campo obligatorio</p>}
          </label>
        </section>

        <section className='fields'>    
          <label  className='bodyXLBold' htmlFor='role'>Función *
            <select name='role' id='role' {...register('role', {required: {
              value: true,
              message: 'Campo obligatorio'
            }})}>
              <option value='admin'>Administración</option>
              <option value='precident'>Presidente</option>
              <option value='otro'>Otro</option>
            </select>
            {errors.role &&  <p className='text_error' role='alert'>{errors.role?.message}</p>}
          </label>

          <label className='bodyXLBold' htmlFor='communityType'>Tipo de comunidad
            <select name='communityType' id='communityType' {...register('communityType')}>
              <option value='admin'>Un único edificio</option>
              <option value='precident'>Urbanización</option>
            </select>
          </label>
        </section>
        
        <section className='fields'>
          <label className='bodyXLBold' htmlFor='phone'>Teléfono *
            <input className='input bodyLRegular' type='number' id='phone' placeholder='número de teléfono' onChange={handleChange} {...register('phone', {
              required: 'Verificar número de teléfono',
              pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/
            })} aria-invalid={errors.phone ? 'true' : 'false'} />
            {errors.phone &&  <p className='text_error' role='alert'>Campo obligatorio</p>}
          </label>

          <label className='bodyXLBold' htmlFor='email'>Correo electrónico *
            <input className='input bodyLRegular' type='email' id='email' placeholder='Correo electrónico' onChange={handleChange} {...register('email', {
              required: 'Verificar correo electrónico',
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
            })} aria-invalid={errors.email ? 'true' : 'false'} />
            {errors.email &&  <p className='text_error' role='alert'>{errors.email?.message}</p>}
          </label>
        </section>

        <section className='fields'>
          <label className='bodyXLBold' htmlFor='address'>Dirección de la comunidad *
            <input className='input bodyLRegular' type='text' id='address' placeholder='Dirección de la comunidad' onChange={handleChange} {...register('address', {
              required: 'Verificar dirección de la comunidad'
            })} aria-invalid={errors.address ? 'true' : 'false'} />
            {errors.address &&  <p className='text_error' role='alert'>Campo obligatorio</p>}
          </label>

          <label className='bodyXLBold' htmlFor='zipCode'>C.P
            <input className='input bodyLRegular' type='number' id='zipCode' placeholder='Código postal' onChange={handleChange} {...register('zipCode', {
              pattern: /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
            })} aria-invalid={errors.zipCode ? 'true' : 'false'} />
            {errors.zipCode &&  <p className='text_error' role='alert'>{errors.zipCode?.message}</p>}
          </label>
        </section>
       
        <section className='fields'>   
          <label className='bodyXLBold' htmlFor='zone'>Localidad
            <input className='input' type='text' id='zone' placeholder='Localidad' onChange={handleChange} {...register('zone', {
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.zone ? 'true' : 'false'} />
            {errors.zone &&  <p className='text_error' role='alert'>{errors.zone?.message}</p>}
          </label>


          <label className='bodyXLBold' htmlFor='province'>Provincia
            <input className='input' type='text' placeholder='Provincia' id='province' onChange={handleChange} {...register('province', {
              minLength: 3,
              maxLength: 20,
              pattern: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,20}/
            })} aria-invalid={errors.province ? 'true' : 'false'} />
            {errors.province &&  <p className='text_error' role='alert'>{errors.province?.message}</p>}
          </label>
        </section> 

        <section className='form_checkboxes'>
          <section className='form_termsAndConditions'>
            <input {...register('checkbox')} type='checkbox' id='termsAndConditions' value='Aceptar términos y condiciones' />
            <label htmlFor='termsAndConditions' className='bodyLRegular'>Declaro haber leído y acepto los <a href='#'>Términos y condiciones</a> y la <a href='#'>Política de Privacidad</a></label>
          </section>
          <section className='form_notifications'>
            <input {...register('checkbox')} type='checkbox' id='notifications' value='Recibir notificaciones' />
            <label htmlFor='notifications' className='bodyLRegular'>Consiento la utilización de mis datos con fines informativos y la introducción en la base de datos</label>
          </section>
        </section>


        <button className='cta_btn' type='submit'>Enviar</button>
      </form>

      <TextBand className='text_band' text='Title XL * Beneficios * Title XL * Beneficios'/>

      <section className='contact_header'>
        <section className='header_question'>
          <p className='TitleM'>¿Tienes alguna pregunta?</p>
          <p className='bodyXLRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
        </section>

        <section className='contact_us'>
          <section>
            <p className='TitleXS'>Llámanos al</p>
            <p className='TitleM'>xxx.xx.xx.xx</p>
          </section>
          <section>
            <p className='TitleXS'>O escríbenos a</p>
            <p className='TitleM'>abc@abc.es</p>
          </section>
        </section>
      </section>
    </>
  );
};


export default Form;