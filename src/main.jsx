import { StrictMode, useEffect } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './i18n'

// Language detection wrapper
function LanguageRouterWrapper({ children }) {
  const location = useLocation();
  useEffect(() => {
    const match = location.pathname.match(/^\/(en)(\/|$)/);
    if (match) {
      window.localStorage.setItem('i18nextLng', 'en');
    } else {
      window.localStorage.setItem('i18nextLng', 'ch');
    }
  }, [location.pathname]);
  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageRouterWrapper>
        <App />
      </LanguageRouterWrapper>
    </BrowserRouter>
  </StrictMode>
)