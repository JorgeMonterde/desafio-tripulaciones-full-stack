import PropTypes from 'prop-types';


const StepBar = ({ steps }) => {
  return (
    <section className="steps_Wrapper">
      <ul className='steps'>
        { steps?.map(step => <li key={step.number} className='step_item' onClick={step.clickHandler}>
            <span className='step_number'>{step.number}</span>
            <p className='step_name'>{step.name}</p>
          </li>
        )}
      </ul>
    </section> 
  );
};

StepBar.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
};

export default StepBar;