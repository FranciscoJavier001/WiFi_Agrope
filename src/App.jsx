import React from 'react';
import './App.css';

const sendMessage = (text) => {
  window.open(`https://wa.me/524491110087?text=${encodeURIComponent(text)}`, '_blank');
};

function App() {
  return (
    <div className="container">
      <h1>WiFi Agropecuario</h1>
      <div className="button-container">
        <button className="btn green" onClick={() => sendMessage('Agregar Servicio')}>Agregar Servicio</button>
        <button className="btn yellow" onClick={() => sendMessage('Reportar Fallas en el Servicio')}>Reportar Fallas en el Servicio</button>
        <button className="btn red" onClick={() => sendMessage('Cancelar Servicio')}>Cancelar Servicio</button>
      </div>
      <div className="footer">
        <button className="btn black" onClick={() => sendMessage('Soporte')}>Soporte</button>
      </div>
    </div>
  );
}

export default App;
