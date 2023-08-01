import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import { Modal as ModalNext} from "@nextui-org/react";


const inputDefaultValues = {
  email: ''
};


const ResetPasswordModal = ({isVisible}) => {
  //const [visible, setVisible] = useState(false);
  const {visible, changeVisibleState} = isVisible;
  
  //const handlerModal = () => setVisible(!visible);

  const [inputValue, setInputValue] = useState({...inputDefaultValues});
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: inputDefaultValues });
  const navigate = useNavigate();


  //Submit function:
  const onSubmit = async(data) => {
    const {email} = data;
    console.log("data???", data)
    //Send email for reset password function
    const authResponse = await axios.get(`/auth/email/recoverpassword/${email}`, { withCredentials: true });
    console.log("auth response: ",authResponse);

    if(authResponse.data.success){
      // Success modal message
      console.log("From client: You are logged in");
      navigate("/profile");
    } else {
      // Failure modal message
      console.log("From client: You are NOT logged in");
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
      {/* <button className='cta_btn' onClick={changeVisibleState}>Modal</button> */}
      <ModalNext className='modal' closeButton aria-labelledby="modal-title" open={visible} onClose={changeVisibleState}>
        <ModalNext.Header>
          <p className='TitleM'>¿Ha olvidado su contraseña?</p>
        </ModalNext.Header>
        <ModalNext.Body>
          <p className='bodyLRegular'>Escriba su correo electrónico y le enviaremos un correo para restablecer su contraseña</p>

          <form className='form_login' onSubmit={handleSubmit(onSubmit)}>
            <label className='bodyXLBold'>
              <input className='input bodyLRegular' type="email" id='email' placeholder="Correo" onChange={handleChange} {...register("email", {
                required: "Verificar correo de acceso", 
                pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i
              })} aria-invalid={errors.email ? "true" : "false"} />
            </label>
            {errors.email && <p className='text_error' role="alert">{errors.email?.message}</p>}

            <button className='TitleXS' type="submit">Enviar</button>
          </form>
          
        </ModalNext.Body>
      </ModalNext>
    </>
  );
};

ResetPasswordModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isVisible: PropTypes.object
};

export default ResetPasswordModal;











