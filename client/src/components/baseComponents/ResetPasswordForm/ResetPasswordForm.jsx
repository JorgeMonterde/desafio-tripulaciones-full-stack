import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
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
    
    
  //Submit function:
  const onSubmit = async(data) => {
    const {password, rep_password} = data;
    console.log("data???", data)
    try {
      if(password === rep_password){
        //reset password
        const authResponse = await axios.post("http://localhost:3000/auth/email/login", {email, password}, { withCredentials: true });
        console.log("auth response: ",authResponse);
    
        if(authResponse.data.success){
          //Redirect
          console.log("From client: You are logged in");
          navigate("/catalogue");
        } else {
          //Not logged in
          console.log("From client: You are NOT logged in");
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
      <form className='form_login' onSubmit={handleSubmit(onSubmit)}>
        <label>Contraseña *
          <input className='input' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
            required: "Verificar contraseña", 
            minLength: 8, 
            maxLength: 16, 
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
          })} aria-invalid={errors.password ? "true" : "false"} />
        </label>
        {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}
        

        <label>Repita la contraseña *
          <input className='input' type="password" id='rep_password' placeholder="Contraseña" onChange={handleChange} {...register("rep_password", {
            required: "Verificar contraseña", 
            minLength: 8, 
            maxLength: 16, 
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
          })} aria-invalid={errors.rep_password ? "true" : "false"} />
        </label>
        {errors.rep_password && <p className='text_error' role="alert">{errors.rep_password?.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  )
  
};

export default ResetPasswordForm;



resetPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(window.location)
  let pathnameArr = window.location.pathname.split("/");
  let token = pathnameArr[2];
  console.log(token)

  password = e.target.password.value;

  try {
    let response = await fetch("http://localhost:3000/resetpassword", {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      token
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({password}), // body data type must match "Content-Type" header
    });
    
    let data = await response.json(); // parses JSON response into native JavaScript objects
  
  
    // response --> {"success": false, "msj":"This email do not have an account"}
    /* let response = await putData(`http://localhost:3000/resetpassword/${token}`, password); */

    console.log("----_>",data)
    if(data.success){
      window.location = "/login";
    } else {
      console.log("Something went wrong...");
      window.location = "/resetpassword"; 
    }

  } catch (error) {
    console.log(error);
  }
  });