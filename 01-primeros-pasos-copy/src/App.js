import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import {SegundoComponente} from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica={
    altura:'1.60',
    peso:'60'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cambiando el texto
        </p>
        <MiComponente></MiComponente>
        <hr></hr>
        <SegundoComponente></SegundoComponente>
        <hr></hr>
        <TercerComponente nombre='belen' apellido='albano' ficha={ficha_medica}></TercerComponente>
        <hr/>
        <EventosComponente></EventosComponente>
      </header>
    </div>
  );
}

export default App;
