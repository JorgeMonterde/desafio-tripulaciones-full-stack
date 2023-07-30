import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";




const inputDefaultValues = {
  password: '',
  rep_password: '',
};

const ResetPasswordForm = () => {
  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();
  const {recover_token} = useParams();

  useEffect(() => {
    console.log(recover_token);
  },[]);
    
  //Submit function:
  const onSubmit = async(data) => {
    const {password, rep_password} = data;
    console.log("data???", data)
    try {
      if(password === rep_password){
        //reset password
        const authResponse = await axios.put("http://localhost:3000/auth/email/resetpassword", {password}, { 
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            recover_token
            }
         });
        console.log("auth response: ",authResponse);

        if(authResponse.data.success){
          // Success
          console.log("Password updated");
          navigate("/login");
        } else {
          // Fail
          console.log("Could not update password");
        }
        
      } else {
        console.log("Two different passwords provided");
      }
      
    } catch (error) {
      console.log("Error: ", error);
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
    <>
      <section className='reset_section'>
        <form className='form_login' onSubmit={handleSubmit(onSubmit)}>
          <label className='bodyXLBold' htmlFor='password'>Contraseña *
            <input className='input bodyLRegular' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
              required: "Verificar contraseña", 
              minLength: 8, 
              maxLength: 16, 
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
            })} aria-invalid={errors.password ? "true" : "false"} />
          </label>
          {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}
          

          <label className='bodyXLBold' htmlFor='rep_password'>Repita la contraseña *
            <input className='input bodyLRegular' type="password" id='rep_password' placeholder="Contraseña" onChange={handleChange} {...register("rep_password", {
              required: "Verificar contraseña", 
              minLength: 8, 
              maxLength: 16, 
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
            })} aria-invalid={errors.rep_password ? "true" : "false"} />
          </label>
          {errors.rep_password && <p className='text_error' role="alert">{errors.rep_password?.message}</p>}
          <button className='TitleXS cta_btn' type="submit">Enviar</button>
        </form>
      </section>
    </>
  )
  
};

export default ResetPasswordForm;

