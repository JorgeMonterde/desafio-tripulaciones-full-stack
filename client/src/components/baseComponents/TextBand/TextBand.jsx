import PropTypes from 'prop-types';

const TextBand = ({text, className}) => {
  return <>
    <p className={className}>{text}</p>
  </>;
};

TextBand.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default TextBand;