import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioEstado } from './components/EjercicioEstado';

function App() {
  var anio=new Date().getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en react-Hook use state</h1>
        <MiPrimerEstado></MiPrimerEstado>
        <EjercicioEstado anio={anio}></EjercicioEstado>
      </header>
    </div>
  );
}

export default App;
