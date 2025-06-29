import './style.css';
import wifiIcon from '../public/icons/icon-192x192.png'

const sendMessage = (text) => {
  const message = encodeURIComponent(text);
  const phone = "524491110087";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};

function App() {
  return (
    <div className="container">
      <h1>WiFi Agrope</h1>
      <div className="btn-stack">
        <button className="btn green" onClick={() => sendMessage("Agregar Servicio")}>Agregar Servicio</button>
        <button className="btn yellow" onClick={() => sendMessage("Reportar Fallas en el Servicio")}>Reportar Fallas en el Servicio</button>
        <button className="btn red" onClick={() => sendMessage("Cancelar Servicio")}>Cancelar Servicio</button>
        <div className="btn-spacer"></div>
        <button className="btn black" onClick={() => sendMessage("Solicito soporte, comunicarse lo antes posible")}>Soporte</button>
      </div>
    </div>
  );
}

export default App;
