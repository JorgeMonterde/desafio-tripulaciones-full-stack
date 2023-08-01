import PropTypes from 'prop-types';


const StepBar = ({setPpdfName}) => {
  
  const handleClick = (e) => {
    setPpdfName(e.target.className);
  };

  return (
    <section className="steps_Wrapper">
      <ul className='steps'>
        <li className='1_Datos' onClick={handleClick}>
          <span>1</span>
          <p>Datos</p>
        </li>
        <li className='step_item'>
          <span className='step_number'>2</span>
          <p className='step_name'>Auditoría</p>
        </li>
        <li className='step_item'>
            <span className='step_number'>3</span>
            <p className='step_name'>Propuesta</p>
        </li>
        <li className='step_item'>
            <span className='step_number'>4</span>
            <p className='step_name'>Proyecto</p>
        </li>
        <li className='step_item'>
            <span className='step_number'>5</span>
            <p className='step_name'>Hoy</p>
        </li>
      </ul>
    </section> 
  );
};

StepBar.propTypes = {
  setPpdfName: PropTypes.func,
};

export default StepBar;