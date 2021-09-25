import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Heading.css'

export const Heading = ({ children, color, size }) => {
  return (
    <heading
      className={ classNames('heading', {
        [`color-${color}`] : color,
        [`size-${size}`] : size,
      }) }
    >
      { children }
    </heading>
  )
}

Heading.propTypes = {
  children : PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'primary']),
  size : PropTypes.oneOf(['md', 'sm', 'xs'])
}

Heading.defaultProps = {
  children : 'Primera app',
  color: 'default',
  size: 'md'
}