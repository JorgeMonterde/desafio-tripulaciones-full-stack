import { Collapse as CollapseNext } from "@nextui-org/react";

const Collapse = () => {
  return (
      <CollapseNext bordered title="Notificar incidencia">
        <form className='notification_form'>
          <input className='bodyLRegular input' type='text' placeholder='Insertar texto incidencia'></input>
          <button className='cta_incidents' type='submit'>Enviar</button>
        </form>
      </CollapseNext>
  );
};

export default Collapse;