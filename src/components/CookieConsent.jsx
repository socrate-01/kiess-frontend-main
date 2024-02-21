import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies([
    'user-consent',
    'session-cookies',
    'persistent-cookies',
    'essential-cookies',
    'performance-cookies',
    'functionality-cookies',
    'tracking-cookies'
  ]);
  
  // Utilisation de useState pour définir la visibilité initiale basée sur sessionStorage
  const [isVisible, setIsVisible] = useState(!sessionStorage.getItem('hideCookieConsent'));

  useEffect(() => {
    if (cookies['user-consent']) {
      // Si l'utilisateur a déjà accepté les cookies, ne pas afficher le consentement et stocker dans sessionStorage
      sessionStorage.setItem('hideCookieConsent', 'true');
    }
  }, [cookies]); // Se déclenche lorsque les cookies changent

  const handleAccept = () => {
    const commonOptions = { path: '/', maxAge: 2592000 }; // 30 jours pour l'exemple
    setCookie('user-consent', 'accepted', commonOptions);
    setCookie('session-cookies', 'accepted', commonOptions);
    setCookie('persistent-cookies', 'accepted', commonOptions);
    setCookie('essential-cookies', 'accepted', commonOptions);
    setCookie('performance-cookies', 'accepted', commonOptions);
    setCookie('functionality-cookies', 'accepted', commonOptions);
    setCookie('tracking-cookies', 'accepted', commonOptions);
    sessionStorage.setItem('hideCookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem('hideCookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '40px',
      zIndex: 10000,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      maxWidth: '500px',
      width: '90%',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <a href="#" onClick={handleDecline} style={{ color: '#db1262', textDecoration: 'none', fontWeight: 'bold' }}>Continuer sans accepter</a>
      </div>
      <h2 style={{ color: '#343a40', margin: '0 0 20px 0' }}>Consentement aux Cookies</h2>
      <p style={{ margin: '0 0 20px 0', fontSize: '16px', lineHeight: '1.5', textAlign: 'left' }}>
        Kiess Inc et ses partenaires utilisent des cookies pour améliorer votre expérience, analyser le trafic, et personnaliser les publicités. En utilisant notre site, vous acceptez notre utilisation de cookies pour ces objectifs. Vous pouvez choisir d'accepter, personnaliser vos préférences ou naviguer sans accepter les cookies non essentiels. Vos choix sont modifiables à tout moment via les paramètres de votre compte. Vous pouvez voir nos 
        <a href="/Conditions" style={{ color: '#db1262', textDecoration: 'none', fontWeight: 'bold' }}>politique de cookies</a>.
      </p>
      <button onClick={handleAccept} style={{
        backgroundColor: '#db1262',
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>Accepter</button>
    </div>
  );
};

export default CookieConsent;
