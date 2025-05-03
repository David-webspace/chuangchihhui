// src/components/Header/MobileMenu.jsx
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, menuItems, activeMenuItem, onMenuSelect, onToggle, t }) => {
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
                <Link to={menu.url}>
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
