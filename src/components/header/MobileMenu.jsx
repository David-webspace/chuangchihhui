// src/components/Header/MobileMenu.jsx
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '../../getLocalizedPath';

const MobileMenu = ({ isOpen, menuItems, activeMenuItem, onMenuSelect, onToggle, t, i18n }) => {
  return (
    <div className="mobile-menu">
      <FaBars size={32} className="menu-toggle" onClick={onToggle} />
      {isOpen && (
        <nav className="mobile-navigation">
          <ul className="mobile-menu-list">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                onClick={() => onMenuSelect(menu.id)}
                className={`mobile-menu-item ${menu.id === activeMenuItem ? 'active' : ''}`}
              >
                <Link to={getLocalizedPath(menu.url, i18n.language)}>
                  {t(menu.menu)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
