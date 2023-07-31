import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResetPasswordModal from "./ResetPasswordModal/ResetPasswordModal";
//contexts
import { LoggedInContext } from "../../../../contexts/loggedInContext";






const inputDefaultValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: inputDefaultValues });
    const navigate = useNavigate();
    
    const [visible, setVisible] = useState(false);
    const changeVisibleState = () => {
      setVisible(!visible);
    };
    const isVisible = {visible, changeVisibleState};
    const {loggedInState} = useContext(LoggedInContext);
    
  
    
    
    
  //Submit function:
  const onSubmit = async(data) => {
    const {email, password} = data;
    console.log("data???", data)
    //log in 
    try {
      const authResponse = await axios.post("http://localhost:3000/auth/email/login", {email, password}, { withCredentials: true });
      console.log("auth response: ",authResponse)
  
      if(authResponse.data.success){
        //Redirect
        console.log("From client: You are logged in");
        loggedInState.changeLoggedInState(true);
        navigate("/profile");
      } else {
        //Not logged in
        console.log("From client: You are NOT logged in");
        
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      setLoginErrorMessage("Email o contraseña incorrectos");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }


  
  return (
    <section className='login_section'>
      <form className='form_login grid-1' onSubmit={handleSubmit(onSubmit)}>
        <label className='bodyXLBold' htmlFor='email'>Correo electrónico *
          <input className='input bodyLRegular' type="email" id='email' placeholder="Correo" onChange={handleChange} {...register("email", {
            required: "Verificar correo de acceso", 
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
          })} aria-invalid={errors.email ? "true" : "false"} />
        </label>
        {errors.email && <p className='text_error' role="alert">{errors.email?.message}</p>}

        <label className='bodyXLBold' htmlFor='password'>Contraseña *
          <input className='input bodyLRegular' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
            required: "Verificar contraseña", 
            minLength: 8, 
            maxLength: 16, 
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
          })} aria-invalid={errors.password ? "true" : "false"} />
        </label>
        {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}
        <a onClick={changeVisibleState}>¿Ha olvidado su contraseña?</a>
        <ResetPasswordModal isVisible={isVisible} />


        {loginErrorMessage? <p className='text_error'>{loginErrorMessage}</p> : ""}
        <button className='TitleXS cta_btn' type="submit">Enviar</button>
      </form>
    </section>
  )
  
};

export default Login;