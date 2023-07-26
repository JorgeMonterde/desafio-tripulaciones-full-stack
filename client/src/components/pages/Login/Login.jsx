import { useState } from 'react';
import { useForm } from 'react-hook-form';

const inputDefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
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
      <form className='form_login' onSubmit={handleSubmit(onSubmit)}>
        <label>Correo electrónico *
          <input className='input' type="email" id='email' placeholder="Correo" onChange={handleChange} {...register("email", {
            required: "Verificar correo de acceso", 
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
          })} aria-invalid={errors.email ? "true" : "false"} />
        </label>
        {errors.email && <p className='text_error' role="alert">{errors.email?.message}</p>}

        <label>Contraseña *
          <input className='input' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
            required: "Verificar contraseña", 
            minLength: 8, 
            maxLength: 16, 
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
          })} aria-invalid={errors.password ? "true" : "false"} />
        </label>
        {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  )
  
};

export default Login;