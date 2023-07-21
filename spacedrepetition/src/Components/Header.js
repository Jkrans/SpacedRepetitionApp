import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Header = ({title}) => {
  return (
    <div className='header'>
      <h1 className="text-dark p-2 pb-3">
        <spam className='me-3'><FontAwesomeIcon icon={faBrain} color = 'pink' className="" /></spam> 
  {title}
</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Spaced Repetition App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
