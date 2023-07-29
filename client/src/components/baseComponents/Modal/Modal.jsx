import { useState } from "react";
import PropTypes from 'prop-types';
import { Modal as ModalNext} from "@nextui-org/react";

const Modal = ({title, content}) => {
  const [visible, setVisible] = useState(false);
  
  const handlerModal = () => setVisible(!visible);

  return (
    <>
      <button className='cta_btn' onClick={handlerModal}>Modal</button>
      <ModalNext className='modal' closeButton aria-labelledby="modal-title" open={visible} onClose={handlerModal}>
        <ModalNext.Header>
          <p className='TitleM'>{title}</p>
        </ModalNext.Header>
        <ModalNext.Body>
          <p className='bodyLRegular'>{content}</p>
        </ModalNext.Body>
      </ModalNext>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Modal;