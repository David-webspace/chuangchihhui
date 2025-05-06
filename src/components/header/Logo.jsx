import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '../getLocalizedPath';

const Logo = () => {
  const { i18n } = useTranslation();
  return (
    <Link to={getLocalizedPath('/', i18n.language)}>
    <div className="logo">
      <img 
        src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" 
        alt="Logo" 
        className="logo-image" 
      />
      <div className="logo-text">
        <h3>莊志輝</h3>
        <h3>CHUANG CHIH HUI</h3>
      </div>
    </div>
  </Link>
  )
}

export default Logo