import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import critics_item from '../datas/critics.json';
import report from '../datas/reports.json';
import '../css/critics.css'
import { FaWeight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SCREEN_BREAKPOINTS = {
  MOBILE: { min: 375, max: 425, width: '100%' },
  TABLET_SMALL: { min: 425, max: 768, width: '45%' },
  TABLET: { min: 768, max: 1024, width: '31%' },
  DESKTOP: { min: 1024, max: 1960, width: '31%' }
};

const CriticCard = ({ critic, width, visibleSection }) => (
  <div className="mg-b-50" style={{ position: 'relative', height:"200px", overflow:"hidden" }}>
    <Link to={`${visibleSection==='critics' ? `/critics/${critic.id}` : `${critic.url}`}`} target={`${visibleSection==='report' ? '_blank' : ''}`} className='df'>
      <div className="fw mg-r-50" style={{ position: 'relative', width:"40%" }}>
        <img src={critic.bg} alt={critic.title} className="fw" />
      </div>
      <div style={{width:"60%"}}>
        <h3 style={{color:"var(--title-grey)"}} className="mg-b-20">{critic.title}</h3>
        <h4 className='mg-b-5'>{critic.concept}</h4>
        <h4 style={{display: `${visibleSection==='critics' ? '' : 'none'}`}} className='mg-b-5'>{critic.author}</h4>
        <h4>{critic.description}</h4>
      </div>
    </Link>
  </div>
);

// Updated TabButton component with responsive features
const TabButton = ({ label, isActive, onClick, screenWidth }) => {

  const { t } = useTranslation();

  const getTabStyles = () => {
    // Base styles
    const baseStyles = {
      fontWeight: '900',
      transition: 'all 0.4s ease',
    };

    // Responsive styles
    if (screenWidth < 425) { // Mobile
      return {
        ...baseStyles,
        fontSize: '16px',
        padding: '2px 12px',
        marginRight: '5px',
      };
    } else if (screenWidth < 768) { // Tablet
      return {
        ...baseStyles,
        fontSize: '12px',
        padding: '2px 15px',
        marginRight: '5px',
      };
    } else { // Desktop
      return {
        ...baseStyles,
        fontSize: '16px',
        FaWeight:900,
        lineHeight: 1.5,
        padding: '2px 0px',
        // marginRight: '0px',
        textAlign:"center"
      };
    }
  };

  const getTabClasses = () => {
    const baseClasses = 'pointer trans-4';
    const activeClass = isActive ? 'bd-bt-active' : '';
    
    // Add responsive classes
    if (screenWidth < 425) {
      return `${baseClasses} ${activeClass} mobile-tab`;
    }
    return `${baseClasses} ${activeClass} mg-r-20`;
  };

  return (
    <li
      className={getTabClasses()}
      onClick={onClick}
      style={{
        ...getTabStyles(),
        // borderBottom: isActive ? '2px solid #000' : 'none',
        textAlign: screenWidth < 425 ? 'center' : 'center', // Center text on mobile｀
        flex: screenWidth < 425 ? '1 1 45%' : 'none', // Equal width on mobile
      }}
    >
      <h5 style={getTabStyles()}>{t(label)}</h5>
    </li>
  );
};


const ResponsiveCriticsList = ({ critics, screenWidth, visibleSection }) => {
  const getResponsiveStyles = () => {
    const baseClasses = 'df';
    if (screenWidth >= 375 && screenWidth < 425) return `${baseClasses} fd-c`;
    return `${baseClasses} jc-sb fl-wp`;
  };

  const getCardWidth = () => {
    if (screenWidth < 425) return '100%';  // mobile
    if (screenWidth < 768) return '50%';   // small tablet
    return '100%';                         // tablet & desktop
  };

  return (
    <div className={getResponsiveStyles()}>
      {critics.map((critic, index) => {
        const isVisible = Object.values(SCREEN_BREAKPOINTS).some(
          breakpoint => screenWidth >= breakpoint.min && screenWidth < breakpoint.max
        );

        return (
          <div key={index} className={`${isVisible ? 'df' : 'dn'}`} style={{width:getCardWidth()}}>
            <CriticCard critic={critic} width={"100%"} visibleSection={visibleSection}/>
          </div>
        );
      })}
    </div>
  );
};

const Critics = () => {
  const [visibleSection, setVisibleSection] = useState('critics');
  const screenWidth = window.innerWidth;

  const handleSectionToggle = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const tabs = [
    { id: 'critics', label: '藝評' },
    { id: 'report', label: '報導' }
  ];

  return (
    <div className='Container'>
      <ul className="df pd-b-title mg-b-30 w-auto">
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            label={tab.label}
            isActive={visibleSection === tab.id}
            onClick={() => handleSectionToggle(tab.id)}
            screenWidth={screenWidth}
          />
        ))}
      </ul>

      {visibleSection === 'critics' && (
        <ResponsiveCriticsList
          critics={critics_item}
          screenWidth={screenWidth}
          visibleSection={'critics'}
        />
      )}

      {visibleSection === 'report' && (
        <ResponsiveCriticsList
          critics={report} // Add report data here
          screenWidth={screenWidth}
          visibleSection={'report'}
        />
      )}
    </div>
  );
};

export default Critics;
