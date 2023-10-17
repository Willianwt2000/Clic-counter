import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <h1>Contador de Clics</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador />
        <Boton 
          
        />
      </div>
    </div>
  );
}

export default App;
