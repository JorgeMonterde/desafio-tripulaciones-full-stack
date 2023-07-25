import PropTypes from 'prop-types';

const Button = ({text}) => {
  return (
    <button className='action_btn' type='submit'>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
}

export default Button;