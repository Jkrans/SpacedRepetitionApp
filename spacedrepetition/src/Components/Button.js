import PropTypes from 'prop-types';

const Button = ({onClick, text, className}) => {
  return (
    
      <button className = {className} onClick={onClick} >{text}</button>
    
  )
}

Button.defaultProps = {
    text: 'button'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button

