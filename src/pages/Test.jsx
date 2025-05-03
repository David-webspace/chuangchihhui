import { useState, useEffect, useRef } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import menuItems from '../datas/menuItem.json';
import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './header/LanguageSelector';

const Header1 = () => {
    const [activeSubMenu, setActiveSubMenu] = useState(null); // 用於追蹤哪個選單被點擊
    const [activeMenu, setActiveMenu] = useState('artworks');
    const menuRef = useRef(null); // 用於檢測點擊外部
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡選單是否打開
    const { t } = useTranslation();

    // ==================== Reload Menu ====================
    useEffect(() => {
        const pathname = location.pathname;
        const menuMapping = {
            '/portfolio/artworks': 'artworks',
            '/events': 'events',
            '/experiences': 'experiences',
            '/critics': 'critics',
            '/contacts': 'contacts',
        };
        setActiveMenu(menuMapping[pathname] || 'artworks');
    }, [location.pathname]);

    // 點擊主選單時顯示/隱藏子選單
    const handleMenuClick = (menuId) => {
        setActiveSubMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
    };

    // 點擊外部時關閉子選單
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.subMenuLink')
            ) {
                setActiveSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItemRender = menuItems.map((menu, index) => {
        return (
            <div key={index} className="menuItemContainer" ref={menuRef}>
                {/* 主選單 */}
                {menu.id === 'artworks' ? (
                    <div
                        className={`menuItem ${activeMenu === menu.id ? 'active' : ''}`}
                        onClick={() => handleMenuClick(menu.id)}
                    >
                        {t(menu.menu)}
                    </div>
                ) : (
                    <Link
                        to={menu.url}
                        className={`menuItem ${activeMenu === menu.id ? 'active' : ''}`}
                        onClick={() => {
                            handleMenuClick(menu.id);
                            setActiveMenu(menu.id);
                        }}
                    >
                        {t(menu.menu)}
                    </Link>
                )}

                {/* 子選單：僅在主選單被點擊時顯示 */}
                {menu.sub && activeSubMenu === menu.id && (
                    <ul className="subMenu">
                        {menu.sub.map((subMenu, subMenuIdx) => (
                            <li key={subMenuIdx} className="subMenuItem">
                                <Link
                                    to={`/portfolio/${subMenu.pathname}`}
                                    className="subMenuLink"
                                    onClick={() => setActiveSubMenu(null)} // 點擊子選單後關閉
                                >
                                    {t(subMenu.text)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    });

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="LogoContainer">
                <div className="Logo df aln-itm-c">
                    <img
                        src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                        alt="Logo"
                        className="mg-r-20"
                    />
                    <div style={{ width: '200px' }}>
                        <h3 style={{ fontSize: '18px' }}>莊志輝</h3>
                        <h3 style={{ fontSize: '18px' }}>CHUANG CHIH HUI</h3>
                    </div>
                </div>
            </Link>

            {/* 漢堡按鈕 */}
            <button
                className="hamburgerButton"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                ☰
            </button>

            {/* 主選單 */}
            <div className={`menuContainer ${isMenuOpen ? 'open' : ''}`}>
                {menuItemRender}
                <LanguageSelector />
            </div>
        </header>
    );
};

export default Header1;