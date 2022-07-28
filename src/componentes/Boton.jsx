import React from 'react';
import '../estilos/boton.css'
// Sintaxis de desestructuracion, envia directamente las variables, sin pasar por el props.
function Boton({texto, esBotonDeClic, manejarClic}) {
  return (
    
    // Evaluacion de booleano, si es verdadero, la clase es "boton-clic", de lo contrario es "boton-reiniciar"
    <button 
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;