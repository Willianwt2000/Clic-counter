import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {

  const [numClics, setNunmClics] = useState(0);

  const manejarClic = () => {
    setNunmClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNunmClics(0);
  }




  return (
    <div className="App">
      <div className='contenedor'>
        <h1>Contador de Clics</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton 
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
