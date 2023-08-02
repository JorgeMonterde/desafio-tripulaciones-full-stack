import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../baseComponents/Modal/Modal";





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
  
  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const changeVisibleState = () => {
    setVisible(!visible);
  };
  const changeModalInfo = (title, content) => {
    setModalInfo({"title": title, "content": content});
  };
  const isVisible = {visible, changeVisibleState};

    
  //Submit function:
  const onSubmit = async(data) => {
    const {password, rep_password} = data;
    console.log("data???", data)
    try {
      if(password === rep_password){
        //reset password
        const authResponse = await axios.put("/auth/email/resetpassword", {password}, { 
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
          changeModalInfo("Contraseña actualizada.","Sus credenciales han sido actualizadas. Puede entrar en su perfil de cliente en la ventana de 'login'. ");
          changeVisibleState();

        } else {
          // Fail
          console.log("Could not update password");
          changeModalInfo("Algo ha ido mal.","No hemos podido actualizar sus credenciales. Inténtelo más tarde o póngase en contacto con nosotros. Sentimos las molestias.");
          changeVisibleState();
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
          <label className='bodyXLBold' htmlFor='password'>Nueva contraseña *
            <input className='input bodyLRegular' type="password" id='password' placeholder="Contraseña" onChange={handleChange} {...register("password", {
              required: "Introduzca su contraseña"
            })} aria-invalid={errors.password ? "true" : "false"} />
          </label>
          {errors.password && <p className='text_error' role="alert">{errors.password?.message}</p>}

          <label className='bodyXLBold' htmlFor='rep_password'>Repita la contraseña *
            <input className='input bodyLRegular' type="password" id='rep_password' placeholder="Contraseña" onChange={handleChange} {...register("rep_password", {
              required: "Vuelva a introducir su contraseña"
            })} aria-invalid={errors.rep_password ? "true" : "false"} />
          </label>
          {errors.rep_password && <p className='text_error' role="alert">{errors.rep_password?.message}</p>}
          <button className='TitleXS cta_btn' type="submit">Enviar</button>
        </form>
        <Modal isVisible={isVisible} title={modalInfo.title} content={modalInfo.content}/>
      </section>
    </>
  )
  
};

export default ResetPasswordForm;

