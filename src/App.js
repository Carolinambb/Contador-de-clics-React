import './App.css';
import JustinLogo from './imagenes/justin-bieber-logo.png'
import Boton from './componenetes/Boton';
import Contador from './componenetes/Contador';
import{ useState } from 'react';

function App() {
const[numClics, setNumClics] = useState(0);

const manejarClic = () =>{
  setNumClics(numClics + 1); //lo actualizo para sumar
  
}
const reiniciarContador = () =>{
setNumClics(0) //esta funcion es para actualizar

}


  return (
    <div className='App'>
      <div className='justinBieber-logo-contenedor'>
      <img
          className='justinBieber-logo'
            src={JustinLogo}
              alt='Logo de justinBieber'/>
      </div>
      <div className='contenedor-principal'>

        <Contador numClics={numClics}/>

      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}/>

      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}/>

      </div>

    </div>
  );
}

export default App;
