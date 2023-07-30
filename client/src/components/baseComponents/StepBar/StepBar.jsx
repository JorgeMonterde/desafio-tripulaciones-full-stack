
const StepBar = () => {

  // const handleClick = () =>

  return (
    <section className="steps_Wrapper">
      <ul className='steps'>
        <li className='step_item'>
          <span className='step_number'>1</span>
          <p className='step_name'>Datos</p>
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
        <li className='progress'>
          <span className='indicator'></span>
        </li>
      </ul>
    </section> 
  );
};

export default StepBar;