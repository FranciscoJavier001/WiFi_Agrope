import './App.css'
import wifiIcon from '../public/icons/icon-192x192.png'

function App() {
  return (
    <div className="app-container">
      <img src={wifiIcon} alt="WiFi Icon" className="wifi-icon" />
      <h1>Conéctate a WiFi Agrope</h1>
      <button>Conectar</button>
      <button>Comprar Código</button>
    </div>
  );
}

export default App;
