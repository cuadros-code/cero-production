import PropTypes from 'prop-types';
import './Button.css'

export const Button = ({ children }) =>  <button> { children } </button>

Button.propTypes = {
  /** Contenido boton */
  children: PropTypes.string
};

Button.defaultProps = {
  children : 'Primary'
}