// CookieConsent.jsx
import React from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['user-consent']);

  if (cookies['user-consent']) {
    return null; // L'utilisateur a déjà accepté, ne rien afficher.
  }

  const handleAccept = () => {
    setCookie('user-consent', 'accepted', { path: '/', maxAge: 2592000 }); // 30 jours
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%', // Centré verticalement
      left: '50%', // Centré horizontalement
      transform: 'translate(-50%, -50%)', // Ajuste le centrage
      backgroundColor: '#fff', // Fond blanc pour le popup
      padding: '40px',
      zIndex: 10000, // Assure que le popup est bien au-dessus des autres éléments
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Ombre pour un effet de profondeur
      borderRadius: '10px', // Bords arrondis pour le popup
      maxWidth: '500px', // Largeur maximale du popup
      width: '90%', // Adaptatif selon la largeur de l'écran
      textAlign: 'center', // Centre le texte
      fontFamily: 'Arial, sans-serif', // Police de caractères
    }}>
      <h2 style={{ color: '#343a40', margin: '0 0 20px 0' }}>Consentement aux Cookies</h2>
      <p style={{ margin: '0 0 20px 0', fontSize: '16px', lineHeight: '1.5', textAlign: 'left' }}>
      Kiess Inc et ses partenaires utilisent des cookies pour améliorer votre expérience, analyser le trafic, et personnaliser les publicités. En utilisant notre site, vous acceptez notre utilisation de cookies pour ces objectifs. Vous pouvez choisir d'accepter, personnaliser vos préférences ou naviguer sans accepter les cookies non essentiels. Vos choix sont modifiables à tout moment via les paramètres de votre compte. Vous pouvez voir nos 
        <a href="/Conditions" style={{ color: '#db1262', textDecoration: 'none', fontWeight: 'bold' }}> politique de cookies</a>.
      </p>
      <button onClick={handleAccept} style={{
        backgroundColor: '#db1262', // Couleur du bouton
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        cursor: 'pointer',
        borderRadius: '5px', // Bords arrondis pour le bouton
        fontSize: '18px', // Taille de la police du bouton
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)' // Ombre portée pour le bouton
      }}>Accepter</button>
    </div>
  );
};

export default CookieConsent;
