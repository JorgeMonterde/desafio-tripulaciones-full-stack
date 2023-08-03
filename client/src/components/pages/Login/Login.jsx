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
      const authResponse = await axios.post("/auth/email/login", {email, password}, { withCredentials: true });
      console.log("auth response: ",authResponse);

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
      <section className='login_card'>
        <article className='login_header'>
          <h2 className='form_title TitleM TitleL'>Estudio Energético</h2>
          <p className='form_desc bodyLRegular bodyXLRegular'>Si has completado el formulario de contacto, tendrás un correo con las instrucciones para conseguir tus datos de acceso</p>
        </article>

        <form className='form_login grid-1' onSubmit={handleSubmit(onSubmit)}>
          <label className='bodyXLBold' htmlFor='email'>Correo electrónico *
            <input className='input_login' type="email" id='email' placeholder="xxxxx@xxxxx.xx" onChange={handleChange} {...register("email", {
              required: "Campo obligatorio", 
              pattern: {value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i, message: "Correo electrónico inválido"}
            })} aria-invalid={errors.email ? "true" : "false"} />
          </label>
          {errors.email && <p className='text_error' role="alert">{errors.email?.message}</p>}

          <label className='bodyXLBold' htmlFor='password'>Contraseña *
            <input className='input_login' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
              required: "Introduzca contraseña",
            })} aria-invalid={errors.password ? "true" : "false"} />
          </label>
          {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}
          <p className='notification'>¿Has olvidado tu contraseña? Haz click <a onClick={changeVisibleState}>aquí </a> para resetearla</p>
          <ResetPasswordModal isVisible={isVisible} />

          {loginErrorMessage? <p className='text_error'>{loginErrorMessage}</p> : ""}
          <button className='cta_btn_form' type="submit">Enviar</button>
        </form>
      </section>
    </section>
  )
  
};

export default Login;