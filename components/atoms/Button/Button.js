import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Button.css'

export const Button = ({ type, children }) => {
  return (
    <button 
      className={ 
        classNames( 'button', {
          [`type-${type}`]: type
        }) 
      }
    > 
      { children } 
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf[('primary', 'secondary')]
};


Button.defaultProps = {
  children : 'Primary',
  type: 'primary'
} 