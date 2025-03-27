import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f5f5f5',
      height: '100vh'
    }}>
      <h1 style={{ color: '#333' }}>Bienvenue chez Sofa-cile 🧼</h1>
      <p style={{ color: '#555' }}>
        Le spécialiste du nettoyage de vitres à Lyon ✨<br />
        Rapide, pas cher et super propre !
      </p>
      <button style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Demander un devis
      </button>
    </div>
  );
}

export default App;
