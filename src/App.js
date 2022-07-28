import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'; // para usar hooks, hay que importarlos desde react

function App() {

  // Para utilizar useState, se necesita declarar los nombres para una variable y el setter de esta variable
  // Esta variable se mostrará despues en el componente
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  
  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
           />
     </div>
    <div className='contenedor-principal'> 
      <Contador numClics={numClics} />      
      <Boton 
        texto='Clic'
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
