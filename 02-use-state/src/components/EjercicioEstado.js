import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const EjercicioEstado = ({anio}) => {
    const [year,setAnio] = useState(anio);
    function anioAnterior(){
       setAnio(year-1);
    }
    function anioSiguiente(){
        setAnio(year+1);
     }
     function cambiarAnio(n){
        n=parseInt(n);
        if(!Number.isInteger(n)){
            setAnio(year);
        }else{
            setAnio(n);
        }
     }
  return (
    <div><div className='wrap'>
        
    <button onClick={anioAnterior}>Anio anterior</button>
    &nbsp;
    <p>Anio: {year}</p>
    &nbsp;
    <button onClick={anioSiguiente}>Anio siguiente</button>
</div>
    <input type='text' onKeyUp={e=>cambiarAnio(e.target.value)}></input>
</div>
    
  )
}

EjercicioEstado.propTypes = {
    anio:PropTypes.number.isRequired
  }
