// src/components/Header/Navigation.jsx
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { getLocalizedPath } from '../../getLocalizedPath';

const Navigation = ({ menuItems, activeMenuItem, onMenuSelect, t, i18n }) => {
  return (
    <nav className="navigation">
      <ul className="menu-list">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            onClick={() => onMenuSelect(menu.id)}
            className="menu-item"
          >
            <Link
              to={getLocalizedPath(menu.url, i18n.language)}
              className={`menu-link ${menu.id === activeMenuItem ? 'active' : ''}`}
            >
              {t(menu.menu)}
              {menu.id === 'artworks' && (
                <FaAngleDown size={16} className="menu-icon" />
              )}
            </Link>
            {menu.sub && menu.sub.length > 0 && (
              <ul className="submenu">
                {menu.sub.map((sub, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    <Link
                      to={getLocalizedPath(`/portfolio/${sub.pathname}`, i18n.language)}
                      className="submenu-link"
                    >
                      {sub.text}
                      <FaAngleRight size={16} className="submenu-icon" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
