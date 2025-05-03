import React, { useState, useEffect } from 'react';
import Preface from '../components/Preface';
import Opening from '../components/Opening';
import preface_text from '../datas/preface_text.json';
import artworks from '../datas/artworks.json';
import { Link } from 'react-router-dom';
import '../i18n';
import { useTranslation } from 'react-i18next';
import '../css/home.css'
import Homevideo from '../components/Homevideo';

// Constants
const SOCIAL_LINKS = [
  { url: 'https://maps.app.goo.gl/A4tttWxRBfXKYTRf8', label: '地址' },
  { url: 'https://www.instagram.com/sawago88/', label: 'IG' },
  { url: 'https://www.facebook.com/chc888', label: 'FB' },
  { url: 'https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg', label: '紀錄片' }
];

const FEATURED_ARTWORK_IDS = [14, 2, 6, 167, 5, 43, 119, 143];

const SCREEN_BREAKPOINTS = {
  MOBILE: { min: 375, max: 425 },
  TABLET_SMALL: { min: 425, max: 768 },
  TABLET: { min: 768, max: 1024 },
  DESKTOP: { min: 1024, max: 1960 }
};

const ArtworkThumbnail = ({ artwork, screenWidth }) => {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const { t, i18n } = useTranslation();

  const getArtworkStyles = () => {
    if (screenWidth < SCREEN_BREAKPOINTS.TABLET_SMALL.min) { // Mobile
      return { width: "100%", marginBottom: "40px" };
    } else if (screenWidth < SCREEN_BREAKPOINTS.TABLET.min) { // Small Tablet
      return { width: "48%", marginBottom: "60px" };
    } else if (screenWidth < SCREEN_BREAKPOINTS.DESKTOP.min) { // Tablet
      return { width: "31%", marginBottom: "80px" };
    } else { // Desktop
      return { width: "22%", marginBottom: "100px" };
    }
  };

  return (
    <div style={{ ...getArtworkStyles(), position: "relative" }} className='artworkItem'>
      <Link to={`/portfolio/${artwork.series}`} style={{height:"100%"}}>
        <img
          src={artwork.thumbnail}
          alt={artwork.tag}
          className="bx-sd-sm imgActive"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="thumbnailMask">
          <h4 style={{ 
            fontSize:
              screenWidth < SCREEN_BREAKPOINTS.TABLET_SMALL.min ? '14px' : 
              screenWidth < SCREEN_BREAKPOINTS.TABLET.min ? '16px' : '18px' 
          }}>
            {t(artwork.tag)}
          </h4>
        </div>
      </Link>
    </div>
  );
};

const SocialLinks = ({ isMobile }) => {
  const containerStyle = isMobile ? 'txt-aln-c' : 'df';
  const linkStyle = isMobile ?
    {width: '100%', className: 'outerLink'}:
    {className: 'outerLink mg-r-30'};

  return (
    <ul className={`pd-xContainer ${containerStyle}`}>
      {SOCIAL_LINKS.map(({ url, label }) => (
        <a
          key={label}
          href={url}
          {...linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>{label}</li>
        </a>
      ))}
    </ul>
  );
};

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderArtworks = () => {
    return FEATURED_ARTWORK_IDS.map(id => {
      const artwork = artworks[id - 1];
      return artwork ? <ArtworkThumbnail key={id} artwork={artwork} /> : null;
    });
  };

  const getResponsiveLinks = () => {
    if (screenWidth >= SCREEN_BREAKPOINTS.DESKTOP.min && screenWidth < SCREEN_BREAKPOINTS.DESKTOP.max) {
      return <SocialLinks isMobile={false} />;
    }
    if (screenWidth >= SCREEN_BREAKPOINTS.TABLET_SMALL.min && screenWidth < SCREEN_BREAKPOINTS.DESKTOP.min) {
      return <SocialLinks isMobile={true} />;
    }
    return null;
  };

  return (
    <div>
      <Opening />

      <div
        id='homeExplore'
        style={{marginTop:`${ screenWidth<425 ? '100px' : '100px'}`}}
        className="df jc-c homeArtworks"
      >
        <div className="artworks">
          {renderArtworks()}
        </div>
      </div>

      {/* <Preface listings={preface_text} /> */}
      
      <Homevideo />


      {/* {getResponsiveLinks()} */}

    </div>
  );
};

export default Home;
